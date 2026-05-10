import express from 'express';
import {
  verifyCodeController,
  loginController,
  registerController,
} from './auth.controller.js';
import { validateUserLogin } from '../../libraries/middlewares/login/validateUserLogin.js';
import { validateCreateRegister } from '../../libraries/middlewares/register/validateRegister.js';

const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticação e Registro
 */

/**
 * @swagger
 * /auth/verify:
 *   post:
 *     summary: Verifica o código de ativação do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *             properties:
 *               email:
 *                 type: string
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Conta ativada com sucesso.
 */
route.post('/verify', verifyCodeController);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login de usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna o token JWT e dados do usuário.
 */
route.post('/login', validateUserLogin, loginController);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário e organização
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - email
 *               - password
 *               - cpf
 *               - identifier
 *               - corporateName
 *               - businessName
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João"
 *               surname:
 *                 type: string
 *                 example: "Silva"
 *               email:
 *                 type: string
 *                 example: "joao.silva@email.com"
 *               password:
 *                 type: string
 *                 example: "senhaSegura123"
 *               cpf:
 *                 type: string
 *                 example: "12345678901"
 *               identifier:
 *                 type: string
 *                 description: CNPJ da empresa
 *                 example: "12345678000199"
 *               corporateName:
 *                 type: string
 *                 description: Razão Social
 *                 example: "Oficina Mecânica São José LTDA"
 *               businessName:
 *                 type: string
 *                 description: Nome Fantasia
 *                 example: "Oficina São José"
 *     responses:
 *       201:
 *         description: Registro criado, código de verificação enviado.
 */
route.post('/register', validateCreateRegister, registerController);

export default route;
