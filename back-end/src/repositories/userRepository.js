import pool from "../config/conn.js";

async function create(name, surname, email, password, cpf){

    try{

        const sql = 'INSERT INTO users (name, surname, email, password, cpf) VALUES (?, ?, ?, ?, ?)'

        const [rows] = await pool.execute(sql, [name, surname, email, password, cpf])

        console.log(rows)

        return rows

    }catch(err){

        console.log(`Erro ao inserir no banco:` + err)

    }

}

async function userFindById(id){

    try{

        const sql = 'SELECT * FROM users where id = ?'

        const [rows] = await pool.execute(sql, [id])

        console.log(rows)

        return rows

    }catch(err){

        console.log(`Erro ao inserir no banco:` + err)

    }
}

export { create, userFindById}