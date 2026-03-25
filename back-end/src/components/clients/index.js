import { clientRepository } from './clientRepository.js';
import ClientService from './clientService.js';
import { clientAPI } from './clientAPI.js';

const clientService = new ClientService(clientRepository);

export { clientAPI, clientService };
