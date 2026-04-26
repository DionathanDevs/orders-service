import express from 'express';
import { userController, userUpdateController } from './user.controller.js';
import { validateUserCreation } from '../../libraries/middlewares/users/validateUserCreation.js';
import { validateUserUpdate } from '../../libraries/middlewares/users/validateUserUpdate.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import { userSchemaInput } from './user.schema.js';

const router = express.Router();

router.post(
  '/',
  validateUserCreation,
  validateRequest(userSchemaInput),
  userController
);

router.put('/:id', validateUserUpdate, userUpdateController);

export default router;
