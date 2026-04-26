import { orderService } from './index.js';

async function create(req, res) {
  const {
    requestingUser,
    observation,
    status,
    coin,
    carClientId,
    cancellationDate,
    cancellationUser,
    cancellationReason,
    responsibleGroup,
    creationDate,
    updateDate,
    scheduling,
    headOffice,
    branch,
    organization,
  } = req.body;

  try {
    const order = await orderService.create(
      null,
      requestingUser,
      observation,
      status,
      coin,
      carClientId,
      cancellationDate,
      cancellationUser,
      cancellationReason,
      responsibleGroup,
      creationDate,
      updateDate,
      scheduling,
      headOffice,
      branch,
      organization
    );

    return res.status(201).json({
      success: true,
      message: 'Ordem de Servico criada com sucesso!',
      dados: order,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || 'Erro ao criar ordem de servico.',
    });
  }
}

export { create };
