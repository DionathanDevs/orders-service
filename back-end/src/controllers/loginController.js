import 'dotenv/config'

import {loginService} from '../services/loginService.js'

async function loginController(req, res) {

const { email, password } = req.body

if (!email || !password) {

    return res.status(400).json(
        {
            success: false,
            message: 'Email ou senha invalidos'
        })
}
try {

const token = await loginService(email, password)

return res.status(200).json({
    success: true,
    message: 'Login realizado com sucesso.',
    token: token
})

} catch (err) {

return res.status(401).json({
    success: false,
    message: err.message
})

}

}

export { loginController }