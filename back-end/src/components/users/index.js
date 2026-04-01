import UserService from './userService.js';
import { userRepository } from './userRepository.js';
import userRoutes from './userRoutes.js';

const userService = new UserService(userRepository);

export { userService, userRoutes };
