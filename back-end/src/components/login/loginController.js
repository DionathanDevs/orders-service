import {loginService} from './index.js'

async function loginController(req, res) {

const { email, password } = req.body


try {

const token = await loginService.verifyLogin(email, password)

return res.status(200).json({
    success: true,
    message: 'Login realizado com sucesso.',
    token: token
})
    
} catch (err) {

return res.status(401).json({
    success: false,
    message: 'Email ou senha invalido'
})

}

}

export { loginController }