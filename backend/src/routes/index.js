import express from 'express';
import router from './v1.js';

const routes = express.Router();

routes.use('/api/v1', router);

export default routes;
