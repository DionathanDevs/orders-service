import UserService from './user.service.js';
import { userRepository } from './user.repository.js';
import userRoutes from './user.routes.js';

const userService = new UserService(userRepository);

export { userService, userRoutes };
