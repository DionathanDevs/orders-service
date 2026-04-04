import AuthService from './auth.service.js';
import authRoutes from './auth.routes.js';
import { userRepository } from '../users/user.repository.js';
const authService = new AuthService(userRepository);

export { authService, authRoutes };
