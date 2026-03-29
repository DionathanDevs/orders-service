class Login {
  #email;
  #password;
  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }

  getEmail() {
    return this.#email;
  }
}

export default Login;
