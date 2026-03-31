import { authService } from './index.js';
import Verify from './verifyCodeModel.js';
import Register from './registerModel.js';

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
    const token = await authService.verifyLogin(email, password);

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

async function registerController(req, res) {
  const {
    name,
    surname,
    email,
    password,
    cpf,
    identifier,
    corporateName,
    businessName,
  } = req.body;

  try {
    const register = new Register(
      name,
      surname,
      email,
      password,
      cpf,
      identifier,
      corporateName,
      businessName
    );
    const registerWasCreated = await authService.registerUser(register);

    if (!registerWasCreated) {
      return res.status(400).json({
        success: false,
        message: 'Erro ao realizar registro, contate o suporte.',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Registro realizado com sucesso!',
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err || 'Erro ao criar registro',
    });
  }
}

export { verifyCodeController, loginController, registerController };
