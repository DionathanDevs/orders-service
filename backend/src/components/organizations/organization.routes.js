import express from 'express';
import { organizationController } from './organization.controller.js';
import SchemaOrganization from './organization.schema.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';

const route = express.Router();

route.post('/', validateRequest(SchemaOrganization), organizationController);
