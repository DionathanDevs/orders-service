import Car from './carModel.js';

class CarService {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  async createCarService(model, brand, organization) {
    const car = new Car(model, brand, organization);

    await this.carRepository.create(car);
  }

  async updateCarService(model, brand, organization, id) {
    const carId = await this.carRepository.get(id);

    if (!carId) {
      throw new Error('Carro nao encontrado');
    }
    if (carId.organization != organization) {
      throw new Error(
        'Alteracao negada, organizacao do usuario nao pertence ao id informado.'
      );
    }

    await this.carRepository.update(model, brand, id);
  }
}

export default CarService;
