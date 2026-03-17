import * as argon2 from "argon2";


async function hashData(data){

try {

const dataCript = await argon2.hash(data)

return dataCript;

}catch(err){

return console.log('Erro:' + err)

}

}

async function verifyHashData(data, dataInput){
    try{
        
      return await argon2.verify(data, dataInput)
  
    }catch(err){
        throw err
    }
}

export { hashData , verifyHashData}