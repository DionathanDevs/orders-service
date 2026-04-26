import { Router } from 'express';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import orderInputSchema from './order.schema.js';
import { create } from './order.controller.js';

const routes = new Router();

routes.post('/', validateRequest(orderInputSchema), create);

export default routes;
