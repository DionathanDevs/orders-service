import pool from '../../libraries/database/conn.js';

class ClientRepository {
  constructor(db) {
    this.db = db;
  }
  async create(client, organization) {
    const sql =
      'INSERT INTO clients (name, surname, email, cpf, organization) VALUES (?, ? , ?, ? , ?)';

    const [rows] = await this.db.execute(sql, [
      client.name,
      client.surname,
      client.email,
      client.cpf,
      organization,
    ]);

    return rows[0];
  }

  async update(client, organization) {
    const sql =
      'UPDATE INTO clients (name, surname, email, cpf) VALUES (? , ? , ? , ?) where organization = ?';

    const [rows] = await this.db.execute(sql, [
      client.name,
      client.surname,
      client.email,
      client.cpf,
      organization,
    ]);

    return rows[0];
  }

  async getId(id) {
    const sql = 'SELECT * from clients where id = ?';

    const [rows] = await this.db.execute(sql, [id]);

    return rows[0];
  }

  async getAll(organization) {
    const sql = 'SELECT * from clients where organization = ?';

    const [rows] = await this.db.execute(sql, [organization]);

    return rows[0];
  }
}

export const clientRepository = new ClientRepository(pool);
