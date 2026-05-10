import express from 'express';
import { create, update, getId, getAll } from './client.controller.js';
import {
  validateCreate,
  validateGetId,
  validateUpdate,
  validadeGetAll,
} from '../../libraries/middlewares/clients/validateClient.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import { clientSchemaInput } from './client.schema.js';

const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Gerenciamento de clientes
 */

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clients]
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
 *               - document
 *             properties:
 *               name:
 *                 type: string
 *               document:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso.
 */
route.post('/', validateCreate, validateRequest(clientSchemaInput), create);

/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags: [Clients]
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
 *               document:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso.
 */
route.put('/:id', validateUpdate, update);

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes retornada.
 */
route.get('/', validadeGetAll, getAll);

/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     summary: Busca um cliente pelo ID
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente retornado com sucesso.
 */
route.get('/:id', validateGetId, getId);

export default route;
