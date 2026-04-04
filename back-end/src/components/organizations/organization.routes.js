import express from 'express';
import { organizationController } from './organization.controller.js';

const route = express.Router();

route.post('/', organizationController);
