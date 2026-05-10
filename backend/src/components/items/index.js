import ItemRepository from './item.repository.js';
import ItemService from './item.service.js';
import itemRoutes from './item.routes.js';
import pool from '../../libraries/database/conn.js';
import { itemController } from './item.controller.js';

const itemRepository = new ItemRepository(pool);
const itemService = new ItemService(itemRepository);

export { itemService, itemController, itemRoutes };
