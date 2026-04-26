class OrderRepository {
  constructor(db) {
    this.db = db;
  }

  async create(orderData) {
    const sql = `
      INSERT INTO orders (
        requesting_user, observation, status, coin, car_client_id, 
        responsible_group, scheduling, head_office, branch, organization
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      orderData.getRequestingUser(),
      orderData.observation,
      orderData.status,
      orderData.coin,
      orderData.getCarClientId(),
      orderData.responsibleGroup,
      orderData.scheduling,
      orderData.headOffice,
      orderData.branch,
      orderData.getOrganization(),
    ];

    const [result] = await this.db.execute(sql, values);
    return result.insertId;
  }

  async findAll(organizationId) {
    const sql = `
      SELECT * FROM orders 
      WHERE organization = ? 
      ORDER BY creation_date DESC 
      LIMIT ? OFFSET ?
    `;

    const [rows] = await this.db.execute(sql, [organizationId]);
    return rows;
  }

  async findById(id, organizationId) {
    const sql = `
      SELECT * FROM orders 
      WHERE id = ? AND organization = ?
    `;

    const [rows] = await this.db.execute(sql, [id, organizationId]);
    return rows[0] || null;
  }

  async update(id, organizationId, updateData) {
    const sql = `
      UPDATE orders 
      SET 
        observation = COALESCE(?, observation),
        status = COALESCE(?, status),
        coin = COALESCE(?, coin),
        car_client_id = COALESCE(?, car_client_id),
        responsible_group = COALESCE(?, responsible_group),
        scheduling = COALESCE(?, scheduling),
        head_office = COALESCE(?, head_office),
        branch = COALESCE(?, branch)
      WHERE id = ? AND organization = ?
    `;

    const values = [
      updateData.observation ?? null,
      updateData.status ?? null,
      updateData.coin ?? null,
      updateData.car_client_id ?? null,
      updateData.responsible_group ?? null,
      updateData.scheduling ?? null,
      updateData.head_office ?? null,
      updateData.branch ?? null,
      id,
      organizationId,
    ];

    const [result] = await this.db.execute(sql, values);
    return result.affectedRows > 0;
  }

  async cancel(id, organizationId, cancelData) {
    const sql = `
      UPDATE orders 
      SET 
        status = ?, -- Passar o ID do status 'Cancelado'
        cancellation_date = CURRENT_TIMESTAMP,
        cancellation_user = ?,
        cancellation_reason = ?
      WHERE id = ? AND organization = ?
    `;

    const values = [
      cancelData.status_id,
      cancelData.cancellation_user,
      cancelData.cancellation_reason,
      id,
      organizationId,
    ];

    const [result] = await this.db.execute(sql, values);
    return result.affectedRows > 0;
  }

  async delete(id, organizationId) {
    const sql = `
      DELETE FROM orders 
      WHERE id = ? AND organization = ?
    `;

    const [result] = await this.db.execute(sql, [id, organizationId]);
    return result.affectedRows > 0;
  }
}

export default OrderRepository;
