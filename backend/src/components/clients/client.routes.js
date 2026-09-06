import express from 'express';
import { create, update, getId, getAll } from './client.controller.js';
import {
  validateCreate,
  validateGetId,
  validateUpdate,
  validadeGetAll,
} from '../../libraries/middlewares/clients/validateClient.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import { clientSchemaInput } from './client.schema.js';

const route = express.Router();

route.post('/', validateCreate, validateRequest(clientSchemaInput), create);
route.put('/:id', validateUpdate, update);
route.get('/', validadeGetAll, getAll);
route.get('/:id', validateGetId, getId);

export default route;
