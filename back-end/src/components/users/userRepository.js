import 'dotenv/config';
import pool from '../../libraries/database/conn.js';

class UserRepository {
  async create(user) {
    const sql =
      'INSERT INTO users (name, surname, email, password, cpf, organization) VALUES (?, ?, ?, ?, ?, ?)';
    const [rows] = await pool.execute(sql, [
      user.name,
      user.surname,
      user.getEmail(),
      user.getPassword(),
      user.getCpf(),
      user.getOrganization(),
    ]);

    return rows;
  }

  async update(name, surname, email, id) {
    const sql = `UPDATE users SET name = ?, surname = ?, email = ? WHERE id = ?;`;

    const [rows] = await pool.execute(sql, [name, surname, email, id]);

    return rows;
  }

  async queryUserEmail(email) {
    const sql = 'SELECT email, id FROM users where email = ?';
    const [rows] = await pool.execute(sql, [email]);

    return rows[0];
  }

  async userFindById(id) {
    const sql = 'SELECT * users where id = ?';

    const [rows] = await pool.execute(sql, [id]);

    return rows[0];
  }

  async queryUserCpf(cpf) {
    const sql = 'SELECT cpf FROM users where cpf = ?';
    const [rows] = await pool.execute(sql, [cpf]);

    return rows[0];
  }

  async queryEmailAndPass(email) {
    const sql =
      'SELECT id, name, surname, email, password, organization FROM users where email = ?';
    const [rows] = await pool.execute(sql, [email]);

    return rows[0];
  }
}

export const userRepository = new UserRepository();
