import express from 'express';
import { loginController } from './loginController.js';
import { validateUserLogin } from '../../libraries/middlewares/login/validateUserLogin.js';

const router = express.Router();

router.post('/', validateUserLogin, loginController);

export default router;
