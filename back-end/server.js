import 'dotenv/config';
import express from 'express';
import { loginController } from './src/controllers/loginController.js';
import auth from './src/middlewares/authMiddlewares.js'
import { userController } from './src/controllers/userController.js';


const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', loginController)

app.post('users', auth, userController)

app.get('/teste', auth, (req, res) => {
  console.log('Chegou aqui!')
  const organizacaoId = req.user.organization
  const name = req.user.name

return res.status(200).json({
    success: true,
    message: organizacaoId,
    name: name
})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})