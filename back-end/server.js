import 'dotenv/config';
import express from 'express';
import auth from './src/libraries/middlewares/auth/authMiddlewares.js'
import { userAPI } from './src/components/users/index.js'
import {loginAPI} from './src/components/login/index.js'


const app = express()
const port = 3000

app.use(express.json())



app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Chegou aqui.'
  })
})

app.use('/login',loginAPI)


app.use('/users', auth, userAPI)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})