async function validateUserLogin(req, res, next){

const { email, password } = req.body

if (!email || !password) {
    return res.status(400).json(
        {
            success: false,
            message: 'Email ou senha nao informados'
        })
}

next()

}

export {validateUserLogin}