import AuthService from './auth.service.js';
import authRoutes from './auth.routes.js';
import UserRepository from '../users/user.repository.js';
import pool from '../../libraries/database/conn.js';

const userRepository = new UserRepository(pool);
const authService = new AuthService(userRepository);

export { authService, authRoutes };
