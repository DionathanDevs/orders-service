import AuthService from './authService.js';
import authAPI from './authAPI.js';
import { userRepository } from '../users/userRepository.js';
const authService = new AuthService(userRepository);

export { authService, authAPI };
