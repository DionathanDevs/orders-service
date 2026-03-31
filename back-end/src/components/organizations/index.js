import OrganizationService from './organizationService.js';
import { organizationRepository } from './organizationRepository.js';

const organizationService = new OrganizationService(organizationRepository);

export { organizationService };
