import 'dotenv/config'
import { create, userFindById, queryUserEmail, queryUserCpf} from '../repositories/userRepository.js'
import User from '../models/userModel.js'
import { hashData } from '../utils/argon.js'

async function userService(name, surname, email, password, cpf, organization) {

try {

const validateCpf = await queryUserCpf(cpf)

if(validateCpf){
  throw new Error('CPF ja cadastrado')
}

const validateEmail = await queryUserEmail(email)

if(validateEmail){
throw new Error('E-mail ja cadastrado')
 
}

const passCript = await hashData(password)

if(!passCript){
 throw new Error('Erro ao cadastrar senha')

}

const user = new User(name, surname, email, passCript, cpf, organization)

const userCreate = await create(user)

if(!userCreate){
throw new Error('Erro ao cadastrar usuario')
}

return true

}catch(err){
    throw err
}

}

export { userService }