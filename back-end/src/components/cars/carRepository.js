import pool from '../../libraries/database/conn.js';

class CarRepository {
  async create(car) {
    const sql =
      'INSERT INTO cars (model, brand, organization) values (?, ?, ?)';

    const [rows] = await pool.execute(sql, [
      car.model,
      car.brand,
      car.organization,
    ]);

    return rows[0];
  }

  async update(model, brand, id) {
    const sql = 'UPDATE cars SET model = ?, brand = ? where id = ?';

    const [rows] = await pool.execute(sql, [model, brand, id]);

    return rows;
  }

  async get(id) {
    const sql = 'SELECT * from cars where id = ?';

    const [rows] = await pool.execute(sql, [id]);

    return rows[0];
  }
}

export const carRepository = new CarRepository();
