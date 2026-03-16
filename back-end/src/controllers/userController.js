import 'dotenv/config'
import { userService } from "../services/userService.js"

async function userController(req, res){
    
const {name, surname, email, password, cpf, organization} = req.body


if(!name){
    return res.status(400).json({
        success: false,
        message: 'Nome e obrigatorio'
    })
}
if(!surname){
    return res.status(400).json({
        success: false,
        message: 'Sobrenome e obrigatorio'
    })
}
if(!email){
    return res.status(400).json({
        success: false,
        message: 'Email e obrigatorio'
    })
}
if(!password){
    return res.status(400).json({
        success: false,
        message: 'Senha e obrigatorio'
    })
}
if(!cpf){
    return res.status(400).json({
        success: false,
        message: 'Cpf e obrigatorio'
    })
}

if(!organization){
    return res.status(400).json({
        success: false,
        message: 'Organizacao e obrigatorio'
    })
}

try{

const userWasCreated = await userService(name, surname, email, password, cpf, organization)

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
