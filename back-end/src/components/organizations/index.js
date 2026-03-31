import OrganizationService from './organizationService.js';
import { organizationRepository } from './organizationAPI.js';

const organizationService = new OrganizationService(organizationRepository);

export { organizationService };
