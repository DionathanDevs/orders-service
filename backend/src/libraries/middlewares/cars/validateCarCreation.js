async function validateCarCreation(req, res, next) {
  const { model, brand } = req.body;
  const organization = req.user.organization;

  if (!model) {
    return res.status(404).json({
      success: false,
      message: 'Modelo e obrigatorio!',
    });
  }

  if (!brand) {
    return res.status(404).json({
      success: false,
      message: 'Marca e obrigatorio!',
    });
  }

  if (!organization) {
    return res.status(404).json({
      success: false,
      message: 'Organizacao e obrigatorio!',
    });
  }

  next();
}

export default validateCarCreation;
