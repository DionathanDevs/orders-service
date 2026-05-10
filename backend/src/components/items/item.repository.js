class ItemRepository {
  constructor(db) {
    this.db = db;
  }

  async create(item) {
    const sql = `
      INSERT INTO items (description, ncm, requesting_user, organization, active) 
      VALUES (?, ?, ?, ?, ?)
    `;

    const [rows] = await this.db.execute(sql, [
      item.description,
      item.ncm || null,
      item.requesting_user,
      item.organization,
      item.active
    ]);

    return rows;
  }

  async update(id, description, ncm, active) {
    const sql = `
      UPDATE items 
      SET description = ?, ncm = ?, active = ? 
      WHERE id = ?
    `;

    const [rows] = await this.db.execute(sql, [
      description,
      ncm || null,
      active,
      id
    ]);

    return rows;
  }

  async getById(id, organization) {
    const sql = 'SELECT * FROM items WHERE id = ? AND organization = ?';

    const [rows] = await this.db.execute(sql, [id, organization]);

    return rows[0];
  }

  async getAll(organization) {
    const sql = 'SELECT * FROM items WHERE organization = ? ORDER BY description ASC';

    const [rows] = await this.db.execute(sql, [organization]);

    return rows;
  }
}

export default ItemRepository;
