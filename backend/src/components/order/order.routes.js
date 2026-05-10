import { Router } from 'express';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import orderInputSchema from './order.schema.js';
import { create } from './order.controller.js';

const routes = new Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gerenciamento de Ordens de Serviço
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria uma nova ordem de serviço
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requestingUser
 *               - observation
 *               - carClientId
 *               - organization
 *             properties:
 *               requestingUser:
 *                 type: number
 *                 description: ID do usuário que está criando a ordem
 *                 example: 1
 *               observation:
 *                 type: string
 *                 description: Observações sobre a ordem de serviço
 *                 example: Veículo chegou com barulho na suspensão
 *               carClientId:
 *                 type: number
 *                 description: ID do carro/cliente vinculado à ordem
 *                 example: 2
 *               organization:
 *                 type: number
 *                 description: ID da organização (oficina)
 *                 example: 1
 *               status:
 *                 type: number
 *                 description: Status da ordem (1 por padrão)
 *                 example: 1
 *               coin:
 *                 type: string
 *                 description: Moeda utilizada (BRL por padrão)
 *                 example: BRL
 *               scheduling:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do agendamento (ISO 8601)
 *                 example: "2024-05-15T14:30:00Z"
 *     responses:
 *       201:
 *         description: Ordem criada com sucesso.
 */
routes.post('/', validateRequest(orderInputSchema), create);

export default routes;
