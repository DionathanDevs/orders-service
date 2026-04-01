import AuthService from './authService.js';
import authRoutes from './authRoutes.js';
import { userRepository } from '../users/userRepository.js';
const authService = new AuthService(userRepository);

export { authService, authRoutes };
