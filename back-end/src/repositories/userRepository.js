import pool from "../config/conn.js";


async function create(user){

    const { name , surname , email, password, cpf } = user 

    try{

        const sql = 'INSERT INTO users (name, surname, email, password, cpf) VALUES (?, ?, ?, ?, ?)'

        const [rows] = await pool.execute(sql, [name, surname, email, password, cpf])

        return rows

    }catch(err){

        throw(err)

    }

}

async function userFindById(id){
    
      try{

        const sql = 'SELECT * FROM users where id = ?'

        const [rows] = await pool.execute(sql, [id])

        console.log(rows)

        return rows[0]

    }catch(err){

        throw (err)

    }
}

export {create, userFindById}