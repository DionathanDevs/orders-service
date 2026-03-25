async function validateCreate(req, res, next) {
  const { name, surname, email, cpf } = req.body;

  const organization = req.user.organization;

  if (!organization) {
    return res.status(403).json({
      success: false,
      message: 'Organizacao e obrigatorio.',
    });
  }
  if (!name) {
    return res.status(404).json({
      success: false,
      message: 'Nome e obrigatorio.',
    });
  }

  if (!surname) {
    return res.status(404).json({
      success: false,
      message: 'Sobrenome e obrigatorio.',
    });
  }

  if (!email) {
    return res.status(404).json({
      success: false,
      message: 'Email e obrigatorio.',
    });
  }

  if (!cpf) {
    return res.status(404).json({
      success: false,
      message: 'Cpf e obrigatorio.',
    });
  }

  next();
}

async function validateUpdate(req, res, next) {
  const organization = req.user.organization;

  if (!organization) {
    return res.status(403).json({
      success: false,
      message: 'Organizacao e obrigatorio.',
    });
  }
  next();
}

async function validateGetId(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      success: false,
      message: 'Id do usuario e obrigatorio.',
    });
  }

  next();
}

export { validateCreate, validateUpdate, validateGetId };
