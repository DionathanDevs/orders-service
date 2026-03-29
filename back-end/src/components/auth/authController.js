import { authService } from './index.js';
import Verify from './verifyCodeModel.js';
import Login from './loginModel.js';

async function verifyCodeController(req, res) {
  const { email, verifyCode } = req.body;

  try {
    const auth = new Verify(email, verifyCode);
    const verify = await authService.verifyCodeUser(auth);

    if (!verify) {
      return res.status(403).json({
        success: false,
        message: 'Erro ao verificar o codigo, contate o suporte.',
      });
    }

    return res.status(203).json({
      success: true,
      message: 'Codigo validado com sucesso!',
    });
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: err || err.message,
    });
  }
}

async function loginController(req, res) {
  const { email, password } = req.body;

  try {
    const login = new Login(email, password);
    const token = await authService.verifyLogin(login);

    return res.status(200).json({
      success: true,
      message: 'Login realizado com sucesso.',
      token: token,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message || 'Email ou senha invalido',
    });
  }
}

async function registerController(req, res) {}

export { verifyCodeController, loginController, registerController };
