import express from 'express';
import auth from '../libraries/middlewares/auth/authMiddlewares.js';
import { userRoutes } from '../components/users/index.js';
import { authRoutes } from '../components/auth/index.js';
import { carRoutes } from '../components/cars/index.js';
import { clientRoutes } from '../components/clients/index.js';
import { orderRoutes } from '../components/order/index.js';
import { itemRoutes } from '../components/items/index.js';
import { organizationRoutes } from '../components/organizations/index.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/cars', auth, carRoutes);
router.use('/clients', auth, clientRoutes);
router.use('/order', auth, orderRoutes);
router.use('/items', auth, itemRoutes);
router.use('/organizations', organizationRoutes);

export default router;
