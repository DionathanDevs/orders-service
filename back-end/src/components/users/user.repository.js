import 'dotenv/config';
import pool from '../../libraries/database/conn.js';

class UserRepository {
  constructor(db) {
    this.db = db;
  }

  async create(user) {
    const sql =
      'INSERT INTO users (name, surname, email, password, cpf, organization, verify_code, verify_code_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [rows] = await this.db.execute(sql, [
      user.name,
      user.surname,
      user.getEmail(),
      user.getPassword(),
      user.getCpf(),
      user.getOrganization(),
      user.verifyCode,
      user.verifyCodeDateExpire,
    ]);

    return rows;
  }

  async update(name, surname, email, id) {
    const sql = `UPDATE users SET name = ?, surname = ?, email = ? WHERE id = ?;`;

    const [rows] = await this.db.execute(sql, [name, surname, email, id]);

    return rows;
  }

  async queryUserEmail(email) {
    const sql = 'SELECT email, id FROM users where email = ?';
    const [rows] = await this.db.execute(sql, [email]);

    return rows[0];
  }

  async userFindById(id) {
    const sql = 'SELECT * FROM users where id = ?';

    const [rows] = await this.db.execute(sql, [id]);

    return rows[0];
  }

  async queryUserCpf(cpf) {
    const sql = 'SELECT cpf FROM users where cpf = ?';
    const [rows] = await this.db.execute(sql, [cpf]);

    return rows[0];
  }

  async queryEmailAndPass(email) {
    const sql =
      'SELECT id, name, surname, email, password, organization FROM users where email = ?';
    const [rows] = await this.db.execute(sql, [email]);

    return rows[0];
  }

  async findUserByEmail(verify) {
    const sql =
      'SELECT id, email, verify_code, verify_code_date FROM users where email = ?';

    const [rows] = await this.db.execute(sql, [verify.email]);

    return rows[0];
  }
  async updateVerify(id) {
    const sql =
      'UPDATE users set active = ?, verify_code = ?, verify_code_date = ? where id = ? ';

    const [rows] = await this.db.execute(sql, [1, null, null, id]);

    return rows;
  }

  async verifyEmailandPass(login) {
    const sql =
      'SELECT id, name, surname, email, password, organization from users WHERE email = ?';

    const [rows] = await this.db.execute(sql, [login.getEmail()]);

    return rows[0];
  }

  async consultDataUser(id) {
    const sql = 'SELECT * from users where id = ?';

    const [rows] = await this.db.execute(sql, [id]);

    return rows[0];
  }
}

export const userRepository = new UserRepository(pool);
