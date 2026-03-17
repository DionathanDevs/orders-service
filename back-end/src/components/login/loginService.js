import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { queryEmailAndPass } from '../repositories/userRepository.js'
import { verifyHashData } from '../../libraries/utils/argon.js'


async function loginService(email, password){

try {
const user = await queryEmailAndPass(email)

if (!user) {
throw new Error('Usuario ou senha invalidos')
}

const isPasswordValid = await verifyHashData(user.password, password)

if (!isPasswordValid) {
throw new Error('Usuario ou senha invalidos')
}

const token = jwt.sign({ id: user.id, name: user.name, organization: user.organization }, process.env.JWT_SECRET, { expiresIn: '8h' })

if(!token){
throw new Error('Erro ao realizar a sessao')
}

return token

}catch(err){
    throw err
}
}

export {loginService}