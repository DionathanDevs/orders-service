import express from 'express';
import { organizationController } from './organizationController.js';

const route = express.Router();

route.post('/', organizationController);
