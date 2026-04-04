import CarRepository from './car.repository.js';
import CarService from './car.service.js';
import carRoutes from './car.routes.js';
import pool from '../../libraries/database/conn.js';

const carRepository = new CarRepository(pool);
const carService = new CarService(carRepository);

export { carService, carRoutes };
