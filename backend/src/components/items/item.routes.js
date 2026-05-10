import express from 'express';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import { createItemSchema, updateItemSchema } from './item.schemas.js';
import { itemController } from './item.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Gerenciamento de itens e serviços
 */

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Cria um novo item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *                 example: Troca de Óleo
 *               ncm:
 *                 type: string
 *                 example: "27101932"
 *     responses:
 *       201:
 *         description: Item criado com sucesso.
 *       400:
 *         description: Erro de validação ou de negócio.
 */
router.post('/', validateRequest(createItemSchema), itemController.create);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Atualiza um item existente
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *                 example: Troca de Óleo - Sintético 5W40
 *               ncm:
 *                 type: string
 *                 example: "27101932"
 *               active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso.
 *       400:
 *         description: Erro de validação.
 */
router.put('/:id', validateRequest(updateItemSchema), itemController.update);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Busca um item pelo ID
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do item
 *     responses:
 *       200:
 *         description: Item retornado com sucesso.
 *       404:
 *         description: Item não encontrado.
 */
router.get('/:id', itemController.getById);

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Lista todos os itens da organização
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de itens.
 */
router.get('/', itemController.getAll);

export default router;
