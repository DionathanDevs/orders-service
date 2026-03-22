import 'dotenv/config'

import User from './userModel.js'
import { hashData } from '../../libraries/utils/argon.js'

class UserService {

constructor(userRepository){
  this.userRepository = userRepository
}

async userCreate(name, surname, email, password, cpf, organization) {

try {

const validateCpf = await this.userRepository.queryUserCpf(cpf)

if(validateCpf){
  throw new Error('CPF ja cadastrado')
}

const validateEmail = await this.userRepository.queryUserEmail(email)

if(validateEmail){
throw new Error('E-mail ja cadastrado')
 
}

const passCript = await hashData(password)

if(!passCript){
 throw new Error('Erro ao cadastrar senha')

}

const user = new User(name, surname, email, passCript, cpf, organization)

const userCreate = await this.userRepository.create(user)

if(!userCreate){
throw new Error('Erro ao cadastrar usuario')
}

return true

}catch(err){
    throw err
}

}


async updateUser(name, surname, email, id){


try {

const validateEmail = await this.userRepository.queryUserEmail(email)

if(validateEmail && Number.parseInt(validateEmail.id) !== Number.parseInt(id)){

throw new Error('Email informado ja esta em uso, por favor, tente outro.')

}


const userUpdate = await this.userRepository.update(name, surname, email, id)

if(userUpdate){
return true
}else{
  throw new Error('Erro ao criar usuario.')
}



}catch(err){
  throw err
}

}

}

export default UserService