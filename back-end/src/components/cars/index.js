import { carRepository } from './carRepository.js';
import CarService from './carService.js';
import carRoutes from './carRoutes.js';

const carService = new CarService(carRepository);

export { carService, carRoutes };
