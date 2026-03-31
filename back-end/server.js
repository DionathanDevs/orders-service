import 'dotenv/config';
import express from 'express';
import auth from './src/libraries/middlewares/auth/authMiddlewares.js';
import { userAPI } from './src/components/users/index.js';
import { authAPI } from './src/components/auth/index.js';
import { carAPI } from './src/components/cars/index.js';
import { clientAPI } from './src/components/clients/index.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Chegou aqui.',
  });
});

app.use('/login', authAPI);
app.use('/users', userAPI);
app.use('/cars', auth, carAPI);
app.use('/clients', auth, clientAPI);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
