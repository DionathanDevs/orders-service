import { clientService } from './index.js';
import Client from './clientModel.js';

async function create(req, res) {
  const { name, surname, email, cpf } = req.body;

  const organization = req.user.organization;

  try {
    // validar se ja existe email / cpf cadastrado.

    //criar
    const client = new Client(name, surname, email, cpf);
    const clientWasCreated = await clientService.create(client, organization);

    if (!clientWasCreated) {
      return res.status(403).json({
        success: false,
        message: clientWasCreated.err || 'Erro ao cadastrar o cliente!',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Cliente cadastrado com sucesso!',
    });
  } catch (err) {
    console.log(err);
    //ajustar status para o correto dps
    res.status(404).json({
      success: false,
      message: err || err.message,
    });
  }
}

async function update(req, res) {
  const { name, surname, email, cpf } = req.body;

  const organization = req.user.organization;

  try {
    const client = new Client(name, surname, email, cpf);
    //validacoes antes aq
    await clientService.update(client, organization);

    return res.status(203).json({
      success: true,
      message: 'Cliente atualizado com sucesso.',
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err || err.message,
    });
  }
}

async function getId(req, res) {
  const { id } = req.params;

  try {
    const client = await clientService.getId(id);

    return res.status(200).json({
      success: true,
      message: 'Cliente encontrado com sucesso!',
      client: client,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err || err.message,
    });
  }
}

async function getAll(req, res) {
  const organization = req.user.organization;

  try {
    const clients = await clientService.getAll(organization);

    return res.status(200).json({
      success: true,
      clients: clients,
    });
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: err || err.message,
    });
  }
}

export { create, update, getId, getAll };
