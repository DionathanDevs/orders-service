import 'dotenv/config'
import {userService} from './index.js'

async function userController(req, res){
    
const {name, surname, email, password, cpf, organization} = req.body

try{

const userWasCreated = await userService.userCreate(name, surname, email, password, cpf, organization)

if(!userWasCreated){
    return res.status(400).json({
        success: false,
        message: 'Nao foi possivel criar o usuario'
    })
}

return res.status(201).json({
    success: true,
    message: 'Usuario criado com sucesso!'
})

}catch(err){
    console.error('Erro ao criar usuario:' + err)
    return res.status(400).json({
        success: false,
        message: err.message
    })
}
}

export { userController }
