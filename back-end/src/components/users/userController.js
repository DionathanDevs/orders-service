import 'dotenv/config';
import { userService } from './index.js';

async function userController(req, res) {
  const { name, surname, email, password, cpf, organization } = req.body;

  try {
    const userWasCreated = await userService.userCreate(
      name,
      surname,
      email,
      password,
      cpf,
      organization,
    );

    if (!userWasCreated) {
      return res.status(400).json({
        success: false,
        message: 'Nao foi possivel criar o usuario',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Usuario criado com sucesso!',
    });
  } catch (err) {
    console.error('Erro ao criar usuario:' + err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

async function userUpdateController(req, res) {
  const { name, surname, email } = req.body;

  const { id } = req.params;

  try {
    const userWasUpdate = await userService.updateUser(
      name,
      surname,
      email,
      id,
    );

    if (!userWasUpdate) {
      return res.status(404).json({
        success: false,
        message:
          'Erro ao atualizar os dados, por gentileza, tente novamente. Se o erro persistir, contate o suporte.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Dados atualizados com sucesso!',
    });
  } catch (err) {
    console.error('ERRO: ' + err);
    return res.status(404).json({
      success: false,
      message:
        err.message ||
        'Erro ao atualizar os dados, por gentileza, tente novamente. Caso persista o erro, contate o suporte.',
    });
  }
}

export { userController, userUpdateController };
