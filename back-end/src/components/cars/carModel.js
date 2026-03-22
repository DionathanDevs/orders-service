class Car {
  constructor(model, brand, organization) {
    this.model = model;
    this.brand = brand;
    this.organization = organization;
  }

  getBrand() {
    return this.brand;
  }

  getModel() {
    return this.model;
  }
}

export default Car;
