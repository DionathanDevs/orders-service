import UserService from './userService.js';
import { userRepository } from './userRepository.js';
import userAPI from './userApi.js';

const userService = new UserService(userRepository);

export { userService, userAPI };
