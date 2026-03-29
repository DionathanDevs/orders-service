import { verifyHashData } from '../../libraries/utils/argon.js';
import jwt from 'jwt';

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

  async verifyLogin(login) {
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
}

export default AuthService;
