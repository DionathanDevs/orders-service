export const validateRequest = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: 'Dados invalidos.',
    });
  }
};
