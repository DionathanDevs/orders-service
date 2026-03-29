class User {
  #email;
  #password;
  #cpf;
  #organization;

  constructor(
    name,
    surname,
    email,
    password,
    cpf,
    organization,
    verifyCode,
    verifyCodeDateExpire
  ) {
    this.name = name;
    this.surname = surname;
    this.#email = email;
    this.#password = password;
    this.#cpf = cpf;
    this.#organization = organization;
    this.verifyCode = verifyCode;
    this.verifyCodeDateExpire = verifyCodeDateExpire;
  }

  getEmail() {
    return this.#email;
  }

  getOrganization() {
    return this.#organization;
  }

  getPassword() {
    return this.#password;
  }

  getCpf() {
    return this.#cpf;
  }

  setEmail(email) {
    this.#email = email;
  }

  setPassword(password) {
    this.#password = password;
  }

  setCpf(cpf) {
    this.#cpf = cpf;
  }
}

export default User;
