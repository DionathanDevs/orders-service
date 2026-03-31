import { verifyHashData } from '../../libraries/utils/argon.js';
import jwt from 'jwt';
import Login from './loginModel.js';
import transform from '../../libraries/utils/date.js';
import User from '../users/userModel.js';
import organizationService from '../organizations/organizationService.js';

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async verifyCodeUser(verify) {
    const user = await this.userRepository.findUserByEmail(verify);

    if (!user) {
      throw new Error('E-mail nao encontrado');
    }

    if (user.verify_code !== verify.verifyCodeInput) {
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
    const organization = await organizationService.create();

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const verifyCodeDateExpire = transform(Date.now() + 24 * 60 * 60 * 1000);

    const user = new User(
      register.name,
      register.surname,
      register.email,
      register.password,
      register.password,
      register.cpf,
      organization.id,
      verifyCode,
      verifyCodeDateExpire
    );

    await this.userRepository.create(user);
  }
}

export default AuthService;
