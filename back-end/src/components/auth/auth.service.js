import { verifyHashData } from '../../libraries/utils/argon.js';
import jwt from 'jsonwebtoken';
import Login from './login.model.js';
import { transform } from '../../libraries/utils/date.js';
import User from '../users/user.model.js';
import { organizationService } from '../organizations/index.js';
import emailService from '../../libraries/email/email.js';

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async verifyCodeUser(verify) {
    const user = await this.userRepository.findUserByEmail(verify);

    if (!user) {
      throw new Error('E-mail nao encontrado');
    }

    if (Number(user.verify_code) !== Number(verify.verifyCodeInput)) {
      throw new Error('Codigo invalido ou expirado, tente novamente');
    }

    if (user.verify_code_date < Date.now()) {
      throw new Error('Codigo expirado, reenvie um novo codigo.');
    }

    const updateUserVerify = await this.userRepository.updateVerify(user.id);

    if (!updateUserVerify) {
      throw new Error('Erro ao validar codigo, contate o suporte.');
    }

    return true;
  }

  async verifyLogin(email, password) {
    const login = new Login(email, password);
    const user = await this.userRepository.verifyEmailandPass(login);

    if (!user) {
      throw new Error('Usuario ou senha invalidos');
    }

    const isPasswordValid = await verifyHashData(
      user.password,
      login.getPassword()
    );

    if (!isPasswordValid) {
      throw new Error('Usuario ou senha invalidos');
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, organization: user.organization },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    if (!token) {
      throw new Error('Erro ao realizar a sessao');
    }

    return token;
  }

  async registerUser(register) {
    const organizationWasCreate = await organizationService.create(
      register.identifier,
      register.corporateName,
      register.businessName
    );

    if (!organizationWasCreate) {
      return false;
    }

    const organization = await organizationService.getByIdentifier(
      register.identifier
    );

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const verifyCodeDateExpire = transform(Date.now() + 24 * 60 * 60 * 1000);

    const user = new User(
      register.name,
      register.surname,
      register.getEmail(),
      register.getPassword(),
      register.getCpf(),
      organization.id,
      verifyCode,
      verifyCodeDateExpire
    );

    const userCreated = await this.userRepository.create(user);

    if (!userCreated) {
      throw new Error('Erro ao criar usuario.');
    }

    emailService.emails.send({
      from: 'onboarding@resend.dev',
      to: user.getEmail(),
      subject: 'Verique seu e-mail.',
      html: `<p>Seu codigo de verificacao: ${verifyCode}</strong>!</p>`, // dps substituir por um template oficial
    });
    return true;
  }
}

export default AuthService;
