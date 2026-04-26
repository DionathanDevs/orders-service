import Order from './order.model.js';
class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async create(
    id,
    requestingUser,
    observation,
    status,
    coin,
    carClientId,
    cancellationDate,
    cancellationUser,
    cancellationReason,
    responsibleGroup,
    creationDate,
    updateDate,
    scheduling,
    headOffice,
    branch,
    organization
  ) {
    const dateScheduling = new Date(scheduling);

    const order = new Order(
      (id = null),
      requestingUser,
      observation,
      status,
      coin,
      carClientId,
      cancellationDate,
      cancellationUser,
      cancellationReason,
      responsibleGroup,
      creationDate,
      updateDate,
      dateScheduling,
      headOffice,
      branch,
      organization
    );

    await this.orderRepository.create(order);
  }
}

export default OrderService;
