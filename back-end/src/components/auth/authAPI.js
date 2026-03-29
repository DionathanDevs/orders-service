import express from 'express';
import {
  verifyCodeController,
  loginController,
  registerController,
} from './authController.js';
import { validateUserLogin } from '../../libraries/middlewares/login/validateUserLogin.js';

const route = express.Router();

route.post('/verify', verifyCodeController);
route.post('/login', validateUserLogin, loginController);
route.post('/register', registerController);

export default route;
