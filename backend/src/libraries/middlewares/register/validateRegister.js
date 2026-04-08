async function validateCreateRegister(req, res, next) {
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

  if (
    !name &&
    !surname &&
    !email &&
    !password &&
    !cpf &&
    !identifier &&
    !corporateName &&
    !businessName
  ) {
    return res.status(403).json({
      success: false,
      message: 'Todos os campos sao obrigatorios.',
    });
  }
  next();
}

export { validateCreateRegister };
