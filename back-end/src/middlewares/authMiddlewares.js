import jwt from  'jsonwebtoken'


const auth = (req, res, next) => {

const token = req.headers['authorization']

if(!token){
    return res.status(403).json({
        success: false,
        message: 'Token invalido!'
    })
}

jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

if(err) return res.status(403).json({
    succes: false,
    message: 'Token invalido!'
})

req.user = user

res.status(200).json({
    success: true,
    message: token
})

next()


})

}

export default auth