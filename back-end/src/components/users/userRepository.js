import 'dotenv/config'
import pool from "../../config/conn.js";


async function user(){
create: async () => {

    try {

        const sql = 'INSERT INTO users (name, surname, email, password, cpf, organization) VALUES (?, ?, ?, ?, ?, ?)'
        const [rows] = await pool.execute(sql, [user.name, user.surname, user.getEmail(), user.getPassword(), user.getPassword(), user.getOrganization()])

        return rows

    } catch (err) {

        throw err

    }
}
update: async (name,surname,email) => {
    
    try{

        const sql = 'UPDATE INTO users (name, surname, email) VALUES (?, ? , ?)'

        const [rows] = await pool.execute(sql, [name, surname, email])

    }catch(err){
        throw err
    }
}
}
 




async function userFindById(id) {

   
}

async function queryUserEmail(email){

try {
    
const sql = 'SELECT email FROM users where email = ?'
const [rows] = await pool.execute(sql, [email])

return rows[0]

}catch (err) {

    throw (err)

}

}

async function queryUserCpf(cpf){

    try {

        const sql = 'SELECT cpf FROM users where cpf = ?'
        const [rows] = await pool.execute(sql, [cpf])

        return rows[0]

    }catch(err){
        throw err
    }

}

async function queryEmailAndPass(email){

try{

    const sql = 'SELECT id, name, surname, email, password, organization FROM users where email = ?'
    const [rows] = await pool.execute(sql, [email])

    return rows[0]

}catch(err){

throw err

}

}

export { create, userFindById , queryUserEmail, queryUserCpf, queryEmailAndPass}