async function validateUserCreation(req, res, next) {
  const { name, surname, email, password, cpf, organization } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Nome e obrigatorio',
    });
  }
  if (!surname) {
    return res.status(400).json({
      success: false,
      message: 'Sobrenome e obrigatorio',
    });
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email e obrigatorio',
    });
  }
  if (!password) {
    return res.status(400).json({
      success: false,
      message: 'Senha e obrigatorio',
    });
  }
  if (!cpf) {
    return res.status(400).json({
      success: false,
      message: 'Cpf e obrigatorio',
    });
  }

  if (!organization) {
    return res.status(400).json({
      success: false,
      message: 'Organizacao e obrigatorio',
    });
  }

  next();
}

export { validateUserCreation };
