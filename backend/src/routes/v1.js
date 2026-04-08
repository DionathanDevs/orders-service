import express from 'express';
import auth from '../libraries/middlewares/auth/authMiddlewares.js';
import { userRoutes } from '../components/users/index.js';
import { authRoutes } from '../components/auth/index.js';
import { carRoutes } from '../components/cars/index.js';
import { clientRoutes } from '../components/clients/index.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/cars', auth, carRoutes);
router.use('/clients', auth, clientRoutes);

export default router;
