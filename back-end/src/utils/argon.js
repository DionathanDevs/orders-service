import * as argon2 from "argon2";


async function hashData(data){

try {

const dataCript = await argon2.hash(data)

return dataCript;

}catch(err){

return console.log('Erro:' + err)

}

}

export { hashData }