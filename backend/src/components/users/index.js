import UserService from './user.service.js';
import UserRepository from './user.repository.js';
import userRoutes from './user.routes.js';
import pool from '../../libraries/database/conn.js';
const userRepository = new UserRepository(pool);
const userService = new UserService(userRepository);

export { userService, userRoutes };
