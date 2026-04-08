import useLoginForm from "../hooks/login/useLoginForm.js";

function Login() {

const {form, change, submit} = useLoginForm();

  return (
    <div>
      <h1>Bem vindo!</h1>
      <form onSubmit={submit}>
        <div>
          <label>E-mail</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={change}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={change}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
