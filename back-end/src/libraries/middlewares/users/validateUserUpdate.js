async function validateUserUpdate(req, res, next){

const {name, surname, email} = req.body

const id = req.user.id

if(!name){
    return res.status(400).json({
        success: false,
        message: 'Organizacao e obrigatorio'
    })
}
if(!surname){
    return res.status(400).json({
        success: false,
        message: 'Organizacao e obrigatorio'
    })
}
if(!email){
    return res.status(400).json({
        success: false,
        message: 'Organizacao e obrigatorio'
    })
}

if(!id){

    return res.status(401).json({
        success: false,
        message: 'Id de usuario nao encontrado na requisicao.'
    })
}

next()
}

export {validateUserUpdate}