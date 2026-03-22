import { carService } from './index.js';

async function carCreate(req, res) {
  const { model, brand } = req.body;

  const organization = req.user.organization;

  try {
    await carService.createCarService(model, brand, organization);

    return res.status(201).json({
      success: true,
      message: 'Carro criado com sucesso!',
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message:
        err.message ||
        'Erro ao cadastrar carro, entre em contato com o suporte.',
    });
  }
}

async function carUpdate(req, res) {
  try {
    const { model, brand } = req.body;

    const organization = req.user.organization;

    const { id } = req.params;

    await carService.updateCarService(model, brand, organization, id);

    return res.status(203).json({
      success: true,
      message: 'Carro atualizado com sucesso.',
    });
  } catch (err) {
    return res.status(403).json({
      success: false,
      message:
        err.message ||
        err ||
        'Erro ao atualizar carro, entre em contato com o suporte.',
    });
  }
}

export { carCreate, carUpdate };
