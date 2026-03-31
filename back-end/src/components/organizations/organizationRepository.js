import pool from '../../libraries/database/conn.js';

class OrganizationRepository {
  async create(organization) {
    const sql =
      'INSERT into organizations (tax_identifier, corporate_name, business_name) values (?, ?, ?)';

    const [rows] = await pool.execute(sql, [
      organization.identifier,
      organization.corporateName,
      organization.businessName,
    ]);

    return rows[0];
  }

  async getByIdentifier(identifier) {
    const sql = 'SELECT * from organizations where tax_identifier = ?';

    const [rows] = await pool.execute(sql, [identifier]);

    return rows;
  }
}

export const organizationRepository = new OrganizationRepository();
