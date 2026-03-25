import express from 'express';
import { create, update, getId } from './clientController.js';
import { validateCreate, validateGetId, validateUpdate } from '../../libraries/middlewares/clients/validateClient.js';

const route = express.Router();

route.post('/', validateCreate, create);
route.put('/:id', validateUpdate, update);
//route.get('/', , getAll);
route.get('/:id', validateGetId, getId);

export default route;
