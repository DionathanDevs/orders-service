import { create, userFindById, queryUserEmail} from '../repositories/userRepository.js'
import User from '../models/userModel.js'
import { hashData } from '../utils/argon.js'




async function createUser(req, res){
    
const {name, surname, email, cpf} = req

let password = req.password

if(!name){
    return res.status(401).json({
        success: false,
        message: 'name is required'
    })
}
if(!surname){
    return res.status(401).json({
        success: false,
        message: 'surname is required'
    })
}
if(!email){
    return res.status(401).json({
        success: false,
        message: 'email is required'
    })
}
if(!password){
    return res.status(401).json({
        success: false,
        message: 'name is required'
    })
}
if(!cpf){
    return res.status(401).json({
        success: false,
        message: 'name is required'
    })
}
// valicao de cpf aqui se quiser
const validateEmail = await queryUserEmail(email)

if(queryUserEmail.err){

    console.log('ERRO VALIDAR EMAIL' + err)

    return res.status(401).json({
        success: false,
        message: 'Erro ao validar email, consulte o suporte.'
    })

}

if(validateEmail){

    console.log('E-mail ja cadastrado, por favor, utilize outro.')

    return res.status(401).json({
        success: false,
        message: 'E-mail ja cadastrado, por favor, utilize outro.'
    })
}

const passCript = await hashData(password)

if(!passCript){
    return res.status(401).json({
        success: false,
        message: 'Erro ao cadastrar senha, contate o suporte!'
    })
}

password = passCript

const user = new User(name, surname, email, password, cpf)

await create(user)

console.log('Usuario cadastrado com sucesso!')

return res.status(200).json({
    success: true,
     message: 'Usuario cadastrado com sucesso!'
})

}

export { createUser }
