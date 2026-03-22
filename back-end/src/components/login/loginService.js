import jwt from 'jsonwebtoken';
import { verifyHashData } from '../../libraries/utils/argon.js';

class LoginService {
  constructor(loginRepository) {
    this.loginRepository = loginRepository;
  }

  async verifyLogin(email, password) {
    const user = await this.loginRepository.verifyEmailandPass(email);

    if (!user) {
      throw new Error('Usuario ou senha invalidos');
    }

    const isPasswordValid = await verifyHashData(user.password, password);

    if (!isPasswordValid) {
      throw new Error('Usuario ou senha invalidos');
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, organization: user.organization },
      process.env.JWT_SECRET,
      { expiresIn: '8h' },
    );

    if (!token) {
      throw new Error('Erro ao realizar a sessao');
    }

    return token;
  }
}

export default LoginService;
