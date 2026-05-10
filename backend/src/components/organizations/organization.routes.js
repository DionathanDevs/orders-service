import express from 'express';
import { createController } from './organization.controller.js';
import { SchemaOrganizationInput } from './organization.schema.js';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';

const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: Organizations
 *   description: Gerenciamento de Organizações
 */

/**
 * @swagger
 * /organizations:
 *   post:
 *     summary: Cria uma organização independentemente (Normalmente feito no /auth/register)
 *     tags: [Organizations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *               - corporateName
 *               - businessName
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: CNPJ ou CPF da organização
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
 *         description: Organização criada.
 */
route.post('/', validateRequest(SchemaOrganizationInput), createController);

export default route;
