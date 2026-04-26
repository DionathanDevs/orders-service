import Order from './order.model.js';

class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async create(
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
    const order = new Order(
      null,
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
    );

    await this.orderRepository(order);
  }
}

export default OrderService;
