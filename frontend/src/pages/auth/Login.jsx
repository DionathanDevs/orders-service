import useLoginForm from "../../hooks/login/useLoginForm.js";

function Login() {
  const { handleSubmit, submitLogin, register, errors } = useLoginForm();
  console.log(errors);
  return (
    <div>
      <h1>Bem vindo!</h1>
      <form onSubmit={handleSubmit(submitLogin)}>
        <div>
          <label>E-mail</label>
          <input type="email" {...register("email", { required: true })} />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
