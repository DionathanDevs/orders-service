import express from 'express';
import { create, update, getId, getAll } from './clientController.js';
import {
  validateCreate,
  validateGetId,
  validateUpdate,
  validadeGetAll,
} from '../../libraries/middlewares/clients/validateClient.js';

const route = express.Router();

route.post('/', validateCreate, create);
route.put('/:id', validateUpdate, update);
route.get('/', validadeGetAll, getAll);
route.get('/:id', validateGetId, getId);

export default route;
