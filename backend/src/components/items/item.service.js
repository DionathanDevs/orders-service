import Item from './item.model.js';

class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async createItemService(description, ncm, requesting_user, organization) {
    const item = new Item(description, ncm, requesting_user, organization, true);

    await this.itemRepository.create(item);
  }

  async updateItemService(id, description, ncm, active, organization) {
    const item = await this.itemRepository.getById(id, organization);

    if (!item) {
      throw new Error('Item não encontrado ou você não tem permissão para editá-lo.');
    }

    if (item.organization !== organization) {
      throw new Error('Alteração negada: a organização do usuário não pertence ao item informado.');
    }

    const isActive = active !== undefined ? active : item.active;

    await this.itemRepository.update(id, description, ncm, isActive);
  }

  async getItemByIdService(id, organization) {
    const item = await this.itemRepository.getById(id, organization);

    if (!item) {
      throw new Error('Item não encontrado.');
    }

    return item;
  }

  async getAllItemsService(organization) {
    return await this.itemRepository.getAll(organization);
  }
}

export default ItemService;
