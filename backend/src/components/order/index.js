import OrderService from './order.service.js';
import OrderRepository from './order.repository.js';
import pool from '../../libraries/database/conn.js';
import orderRoutes from './order.routes.js';

const orderRepository = new OrderRepository(pool);
const orderService = new OrderService(orderRepository);

export { orderService, orderRoutes };
