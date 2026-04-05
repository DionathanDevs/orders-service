import ClientRepository from './client.repository.js';
import ClientService from './client.service.js';
import clientRoutes from './client.routes.js';
import pool from '../../libraries/database/conn.js';

const clientRepository = new ClientRepository(pool);
const clientService = new ClientService(clientRepository);

export { clientRoutes, clientService };
