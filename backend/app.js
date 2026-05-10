import express from 'express';
import cors from 'cors';
import routes from './src/routes/index.js';
import { setupSwagger } from './src/libraries/swagger/swagger.js';

const app = express();

app.use(
  cors({
    origin: process.env.URL_FRONT,
  })
);
app.use(express.json());

// Inicia o Swagger na rota /api-docs
setupSwagger(app);

app.use(routes);

export default app;
