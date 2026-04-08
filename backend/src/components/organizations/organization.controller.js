import { organizationService } from './organization.service.js';

async function createController(req, res) {
  const { identifier, corporateName, businessName } = req.body;

  try {
    const organization = await organizationService.create(
      identifier,
      corporateName,
      businessName
    );

    if (!organization) {
      return res.status(403).json({
        success: false,
        message: 'Erro ao criar organizacao.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Organizacao criada com sucesso.',
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      success: false,
      message: err.message || err || 'Erro ao criar organizacao.',
    });
  }
}

export { createController };
