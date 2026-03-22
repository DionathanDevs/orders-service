import { carRepository } from './carRepository.js';
import CarService from './carService.js';
import carAPI from './carAPI.js';

const carService = new CarService(carRepository);

export { carService, carAPI };
