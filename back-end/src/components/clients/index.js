import { clientRepository } from './clientRepository.js';
import ClientService from './clientService.js';
import clientRoutes from './clientRoutes.js';

const clientService = new ClientService(clientRepository);

export { clientRoutes, clientService };
