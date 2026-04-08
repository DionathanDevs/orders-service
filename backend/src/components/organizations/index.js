import OrganizationService from './organization.service.js';
import OrganizationRepository from './organization.repository.js';
import pool from '../../libraries/database/conn.js';

const organizationRepository = new OrganizationRepository(pool);

const organizationService = new OrganizationService(organizationRepository);

export { organizationService };
