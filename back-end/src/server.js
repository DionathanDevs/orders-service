import express from 'express';
import { authLogin } from './controllers/loginController.js';

const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {

authLogin(req, res)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})