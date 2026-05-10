import express from 'express';
import { userController, userUpdateController } from './user.controller.js';
import { validateUserCreation } from '../../libraries/middlewares/users/validateUserCreation.js';
import { validateUserUpdate } from '../../libraries/middlewares/users/validateUserUpdate.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import { userSchemaInput } from './user.schema.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de Usuários internos
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário interno para a organização
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado.
 */
router.post(
  '/',
  validateUserCreation,
  validateRequest(userSchemaInput),
  userController
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado.
 */
router.put('/:id', validateUserUpdate, userUpdateController);

export default router;
