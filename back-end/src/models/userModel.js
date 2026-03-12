class User {

    constructor(name, surname, email, password, cpf) {

    if(cpf.length != 11){
        throw new Error("O CPF deve ter 11 caracteres")
    }    


    this.name = name
    this.surname = surname
    this.email = email
    this.password = password
    this.cpf = cpf    

    }

}

export default User