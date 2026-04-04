import { clientRepository } from './client.repository.js';
import ClientService from './client.service.js';
import clientRoutes from './client.routes.js';

const clientService = new ClientService(clientRepository);

export { clientRoutes, clientService };
