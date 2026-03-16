import jwt from  'jsonwebtoken'

const auth = (req, res, next) => {

const authHeader = req.headers.authorization

if(!authHeader){
    return res.status(401).json({
        success: false,
        message: 'Token não fornecido. Acesso negado.'
    })
}

const parts = authHeader.split(' ')

const [scheme, token] = parts

if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: "Token malformatado" });
}

  try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.id || !decoded.organization || !decoded.name) {
        return res.status(401).json({ success: false, message: "Token sem identificação de usuário." });
        
    }
       req.user = {
        id: decoded.id,
        organization: decoded.organization,
        name: decoded.name
    };

        return next(); 
        
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Token inválido ou expirado."
        });
    }



}

export default auth