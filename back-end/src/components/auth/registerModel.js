class Register {
  #email;
  #password;
  #cpf;

  constructor(
    name,
    surname,
    email,
    password,
    cpf,
    identifier,
    corporateName,
    businessName
  ) {
    this.name = name;
    this.surname = surname;
    this.#email = email;
    this.#password = password;
    this.#cpf = cpf;
    this.identifier = identifier;
    this.corporateName = corporateName;
    this.businessName = businessName;
  }

  getEmail() {
    return this.#email;
  }

  getPassword() {
    return this.#password;
  }

  getCpf() {
    return this.#cpf;
  }
}

export default Register;
