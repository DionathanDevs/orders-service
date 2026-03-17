import 'dotenv/config';
import express from 'express';
import auth from './src/libraries/middlewares/authMiddlewares.js'
import { userAPI } from './src/components/users/index.js'


const app = express()
const port = 3000

app.use(express.json())

//app.post('/login', loginController)

app.post('users', auth, userAPI)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})