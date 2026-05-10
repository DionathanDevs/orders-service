import express from 'express';
import validateCarCreation from '../../libraries/middlewares/cars/validateCarCreation.js';
import validateCarUpdate from '../../libraries/middlewares/cars/validateCarUpdate.js';
import { carCreate, carUpdate } from './car.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Gerenciamento de veículos
 */

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Cria um novo veículo
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model
 *               - brand
 *             properties:
 *               model:
 *                 type: string
 *               brand:
 *                 type: string
 *     responses:
 *       201:
 *         description: Carro criado com sucesso.
 */
router.post('/', validateCarCreation, carCreate);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Atualiza um veículo
 *     tags: [Cars]
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
 *               model:
 *                 type: string
 *               brand:
 *                 type: string
 *     responses:
 *       203:
 *         description: Carro atualizado com sucesso.
 */
router.put('/:id', validateCarUpdate, carUpdate);

export default router;
