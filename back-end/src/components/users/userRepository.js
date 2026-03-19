import 'dotenv/config'
import pool from "../../libraries/database/conn.js";


class UserRepository {



async create(user){
    try {

        const sql = 'INSERT INTO users (name, surname, email, password, cpf, organization) VALUES (?, ?, ?, ?, ?, ?)'
        const [rows] = await pool.execute(sql, [user.name, user.surname, user.getEmail(), user.getPassword(), user.getCpf(), user.getOrganization()])

        return rows

    } catch (err) {

        throw err

    }
}

async update (name,surname,email,id) {
    
    try{

        const sql = 'UPDATE INTO users (name, surname, email) VALUES (?, ? , ?) WHERE id = ?'

        const [rows] = await pool.execute(sql, [name, surname, email, id])

        return rows[0]

    }catch(err){
        throw err
    }
}

async queryUserEmail(email){

try {
    
const sql = 'SELECT email FROM users where email = ?'
const [rows] = await pool.execute(sql, [email])

return rows[0]

}catch (err) {

    throw err

}

}

async userFindById(id){
    try{


    const sql = 'SELECT * users where id = ?'

    const [rows] = await pool.execute(sql, [id])

    return rows[0]

    }catch(err){

     throw err

    }
}

async queryUserCpf(cpf){

    try {

        const sql = 'SELECT cpf FROM users where cpf = ?'
        const [rows] = await pool.execute(sql, [cpf])

        return rows[0]

    }catch(err){
        throw err
    }

}

async queryEmailAndPass(email){

try{

    const sql = 'SELECT id, name, surname, email, password, organization FROM users where email = ?'
    const [rows] = await pool.execute(sql, [email])

    return rows[0]

}catch(err){

throw err

}

}


}
 

export const userRepository = new UserRepository()