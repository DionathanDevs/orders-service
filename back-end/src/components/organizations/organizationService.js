class OrganizationService {
  constructor(organizationRepository) {
    this.organizationRepository = organizationRepository;
  }

  async create(organization) {
    await this.organizationRepository.create(organization);
  }
}

export default OrganizationService;
