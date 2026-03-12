import {create, userFindById} from './repositories/userRepository.js'


async function createUser(req, res){

const {name, surname, email, password, cpf} = req.body

if(!name){

    return res.status(400).json(

    {
        success: false,
        message: "Name is required"
    }   

    )
}

if(!surname){
    
    return res.status(400).json(
        
    {
        success: false,
        message: "Surname is required"
    }   

    )
}

if(!email){
    
    return res.status(400).json(
        
    {
        success: false,
        message: "Email is required"
    }   

    )

}

if(!password){
    
    return res.status(400).json(
        
    {
        success: false,
        message: "Password is required"
    }   

    )

}

if(!cpf){

    return res.status(400).json(
        
    {
        success: false,
        message: "Cpf is required"
    }   

    )

}

return res.status(200).json()

}

export { createUser }
