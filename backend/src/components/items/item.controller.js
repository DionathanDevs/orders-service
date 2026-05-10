import { itemService } from './index.js';

class ItemController {
  async create(req, res) {
    try {
      const { description, ncm } = req.body;
      const organization = req.user.organization;
      const requesting_user = req.user.id;

      await itemService.createItemService(
        description,
        ncm,
        requesting_user,
        organization
      );

      return res.status(201).json({
        success: true,
        message: 'Item criado com sucesso!',
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message || 'Erro ao criar item.',
      });
    }
  }

  async update(req, res) {
    try {
      const { description, ncm, active } = req.body;
      const organization = req.user.organization;
      const { id } = req.params;

      await itemService.updateItemService(
        id,
        description,
        ncm,
        active,
        organization
      );

      return res.status(200).json({
        success: true,
        message: 'Item atualizado com sucesso!',
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message || 'Erro ao atualizar item.',
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const organization = req.user.organization;

      const item = await itemService.getItemByIdService(id, organization);

      return res.status(200).json({
        success: true,
        item,
      });
    } catch (err) {
      return res.status(404).json({
        success: false,
        message: err.message || 'Erro ao buscar item.',
      });
    }
  }

  async getAll(req, res) {
    try {
      const organization = req.user.organization;

      const items = await itemService.getAllItemsService(organization);

      return res.status(200).json({
        success: true,
        items,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message || 'Erro ao listar itens.',
      });
    }
  }
}

export const itemController = new ItemController();
