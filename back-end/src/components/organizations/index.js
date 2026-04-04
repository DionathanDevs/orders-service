import OrganizationService from './organization.service.js';
import { organizationRepository } from './organization.repository.js';

const organizationService = new OrganizationService(organizationRepository);

export { organizationService };
