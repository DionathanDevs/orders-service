import express from 'express';
import validateCarCreation from '../../libraries/middlewares/cars/validateCarCreation.js';
import validateCarUpdate from '../../libraries/middlewares/cars/validateCarUpdate.js';
import { carCreate, carUpdate } from './carController.js';

const router = express.Router();

router.post('/', validateCarCreation, carCreate);
router.put('/:id', validateCarUpdate, carUpdate);

export default router;
