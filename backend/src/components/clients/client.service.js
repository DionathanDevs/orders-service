class ClientService {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async create(user, organization) {
    this.clientRepository.create(user, organization);
    return true;
  }
}

export default ClientService;
