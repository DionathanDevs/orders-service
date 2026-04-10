import express from 'express';
import cors from 'cors';
import routes from './src/routes/index.js';
const app = express();

app.use(
  cors({
    origin: process.env.URL_FRONT,
  })
);
app.use(express.json());

app.use(routes);

export default app;
