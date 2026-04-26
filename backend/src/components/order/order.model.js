class Order {
  #id;
  #requestingUser;
  #carClientId;
  #organization;

  constructor(
    id = null,
    requestingUser,
    observation,
    status,
    coin = 'BRL',
    carClientId,
    cancellationDate = null,
    cancellationUser = null,
    cancellationReason = null,
    responsibleGroup = null,
    creationDate = new Date(),
    updateDate = new Date(),
    scheduling = null,
    headOffice = null,
    branch = null,
    organization
  ) {
    this.#id = id;
    this.#requestingUser = requestingUser;
    this.#carClientId = carClientId;
    this.#organization = organization;

    this.observation = observation;
    this.status = status;
    this.coin = coin;
    this.cancellationDate = cancellationDate;
    this.cancellationUser = cancellationUser;
    this.cancellationReason = cancellationReason;
    this.responsibleGroup = responsibleGroup;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
    this.scheduling = scheduling;
    this.headOffice = headOffice;
    this.branch = branch;
  }

  getId() {
    return this.#id;
  }

  getRequestingUser() {
    return this.#requestingUser;
  }

  getCarClientId() {
    return this.#carClientId;
  }

  getOrganization() {
    return this.#organization;
  }

  setRequestingUser(requestingUser) {
    this.#requestingUser = requestingUser;
  }

  setCarClientId(carClientId) {
    this.#carClientId = carClientId;
  }

  setOrganization(organization) {
    this.#organization = organization;
  }
}

export default Order;
