import jwt from 'jsonwebtoken'
import { queryEmailAndPass } from '../repositories/userRepository.js'
import {verifyHashData} from '../utils/argon.js'

async function authLogin(req, res) {

const { email, password } = req.body

if (!email || !password){   
    
return res.status(401).json(
{
    success: false,
    message: 'Email ou senha invalidos'
})
}

const user = await queryEmailAndPass(email)

if(user === typeof String){

    return console.log(user)

}


if(!user) {
    
return res.status(403).json({
success: false,
message: 'Email ou senha invalidos'

})} 

try{

    if(await verifyHashData(user.password, password)){

    const token = jwt.sign({id: user.id, username: user.username, email: user.email}, process.env.JWT_SECRET)

    return res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso.',
        token: token
    })}
    
    else{
         return res.status(403).json({
        success: false,
        message: 'Email ou senha invalidos',
    })

    }

}catch(err){

    throw err

}


}

export {authLogin}