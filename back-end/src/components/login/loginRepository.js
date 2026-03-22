import 'dotenv/config';
import pool from '../../libraries/database/conn.js';

class LoginRepository {
  async verifyEmailandPass(email) {
    const sql =
      'SELECT id, name, surname, email, password, organization from users WHERE email = ?';

    const [rows] = await pool.execute(sql, [email]);

    return rows[0];
  }

  async consultDataUser(id) {
    const sql = 'SELECT * from users where id = ?';

    const [rows] = await pool.execute(sql, [id]);

    return rows[0];
  }
}

export const loginRepository = new LoginRepository();
