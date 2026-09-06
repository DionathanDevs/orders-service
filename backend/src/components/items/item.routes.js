import express from 'express';
import { validateRequest } from '../../libraries/middlewares/api/validateRequest.js';
import { createItemSchema, updateItemSchema } from './item.schemas.js';
import { itemController } from './item.controller.js';

const router = express.Router();

router.post('/', validateRequest(createItemSchema), itemController.create);
router.put('/:id', validateRequest(updateItemSchema), itemController.update);
router.get('/:id', itemController.getById);
router.get('/', itemController.getAll);

export default router;
