import Organization from './organizationModel.js';

class OrganizationService {
  constructor(organizationRepository) {
    this.organizationRepository = organizationRepository;
  }

  async create(identifier, corporateName, businessName) {
    const organization = new Organization(
      identifier,
      corporateName,
      businessName
    );
    await this.organizationRepository.create(organization);
  }
}

export default OrganizationService;
