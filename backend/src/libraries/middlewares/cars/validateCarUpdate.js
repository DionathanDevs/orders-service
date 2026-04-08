async function validateCarUpdate(req, res, next) {
  const { model, brand } = req.body;

  const { id } = req.params;

  const organization = req.user.organization;

  if (!id) {
    return res.status(401).json({
      success: false,
      message: 'Id nao fornecido ou nao encontrado.',
    });
  }
  if (!organization) {
    return res.status(401).json({
      success: false,
      message: 'Organizacao nao encontrada ou nao informada.',
    });
  }
  if (!model || !brand) {
    return res.status(403).json({
      success: false,
      message: 'Model ou marca nao informados.',
    });
  }

  next();
}

export default validateCarUpdate;
