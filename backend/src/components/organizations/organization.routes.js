import express from 'express';
import { createController } from './organization.controller.js';
import { SchemaOrganizationInput } from './organization.schema.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';

const route = express.Router();

route.post('/', validateRequest(SchemaOrganizationInput), createController);

export default route;
