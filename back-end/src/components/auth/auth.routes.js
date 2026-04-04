import express from 'express';
import {
  verifyCodeController,
  loginController,
  registerController,
} from './auth.controller.js';
import { validateUserLogin } from '../../libraries/middlewares/login/validateUserLogin.js';
import { validateCreateRegister } from '../../libraries/middlewares/register/validateRegister.js';

const route = express.Router();

route.post('/verify', verifyCodeController);
route.post('/login', validateUserLogin, loginController);
route.post('/register', validateCreateRegister, registerController);

export default route;
