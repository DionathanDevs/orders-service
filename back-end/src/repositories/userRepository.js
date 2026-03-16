import 'dotenv/config'
import pool from "../config/conn.js";


async function create(user) {

    const { name, surname, email, password, cpf , organization} = user
    
    try {

        const sql = 'INSERT INTO users (name, surname, email, password, cpf, organization) VALUES (?, ?, ?, ?, ?, ?)'
        const [rows] = await pool.execute(sql, [name, surname, email, password, cpf, organization])

        return rows

    } catch (err) {

        throw (err)

    }

}

async function userFindById(id) {

    try {

        const sql = 'SELECT * FROM users where id = ?'
        const [rows] = await pool.execute(sql, [id])

        return rows[0]

    } catch (err) {

        throw (err)

    }
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
        throw (err)
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