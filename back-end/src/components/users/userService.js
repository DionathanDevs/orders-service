import 'dotenv/config';
import User from './userModel.js';
import { hashData } from '../../libraries/utils/argon.js';
import emailService from '../../libraries/email/email.js';
import { transform } from '../../libraries/utils/date.js';

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async userCreate(name, surname, email, password, cpf, organization) {
    const validateCpf = await this.userRepository.queryUserCpf(cpf);

    if (validateCpf) {
      throw new Error('CPF ja cadastrado');
    }

    const validateEmail = await this.userRepository.queryUserEmail(email);

    if (validateEmail) {
      throw new Error('E-mail ja cadastrado');
    }

    const passCript = await hashData(password);

    if (!passCript) {
      throw new Error('Erro ao cadastrar senha');
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const verifyCodeDateExpire = transform(Date.now() + 24 * 60 * 60 * 1000);

    const user = new User(
      name,
      surname,
      email,
      passCript,
      cpf,
      organization,
      verifyCode,
      verifyCodeDateExpire
    );

    const userCreate = await this.userRepository.create(user);

    if (!userCreate) {
      throw new Error('Erro ao cadastrar usuario');
    }

    emailService.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Verique seu e-mail.',
      html: `<p>Seu codigo de verificacao: ${verifyCode}</strong>!</p>`, // dps substituir por um template oficial
    });

    return true;
  }

  async updateUser(name, surname, email, id) {
    const validateEmail = await this.userRepository.queryUserEmail(email);

    if (
      validateEmail &&
      Number.parseInt(validateEmail.id) !== Number.parseInt(id)
    ) {
      throw new Error(
        'Email informado ja esta em uso, por favor, tente outro.'
      );
    }

    const userUpdate = await this.userRepository.update(
      name,
      surname,
      email,
      id
    );

    if (userUpdate) {
      return true;
    } else {
      throw new Error('Erro ao criar usuario.');
    }
  }
}

export default UserService;
