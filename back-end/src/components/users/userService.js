import 'dotenv/config'

import User from './userModel.js'
import { hashData } from '../../libraries/utils/argon.js'

class UserService {

constructor(userRepository){
  this.userRepository = userRepository
}

async userCreate(name, surname, email, password, cpf, organization) {


try {

const validateCpf = await userRepository.queryUserCpf(cpf)

if(validateCpf){
  throw new Error('CPF ja cadastrado')
}

const validateEmail = await userRepository.queryUserEmail(email)

if(validateEmail){
throw new Error('E-mail ja cadastrado')
 
}

const passCript = await hashData(password)

if(!passCript){
 throw new Error('Erro ao cadastrar senha')

}

const user = new User(name, surname, email, passCript, cpf, organization)

const userCreate = await userRepository.create(user)

if(!userCreate){
throw new Error('Erro ao cadastrar usuario')
}

return true

}catch(err){
    throw err
}

}


async updateUser(id, name, surname, email){

try {
const user = await userRepository.userFindById(id)

if (user.name !== name) user.name = name



if(user.surname !== surname) user.surname = surname

if(user.email !== email) user.email = email

}catch(err){
  throw err
}


}

}

export default UserService