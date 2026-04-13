import Label from "../../components/Label.jsx";
import Input from "../../components/Input.jsx";
import useRegisterForm from "../../hooks/register/useRegisterForm.js";

function Register() {
  const { register, submitRegister, errors, handleSubmit } = useRegisterForm();
  console.log(errors);
  return (
    <div>
      <h1>Bem vindo!</h1>
      <form onSubmit={handleSubmit(submitRegister)}>
        <div>
          <Label value="Nome" />
          <Input type="text" {...register("name", { required: true })} />
        </div>
        <div>
          <Label value="Sobrenome" />
          <Input type="text" {...register("surname", { required: true })} />
        </div>
        <div>
          <Label value="Email" />
          <Input type="email" {...register("email", { required: true })} />
        </div>
        <div>
          <Label value="Senha" />
          <Input type="password" {...register("password", { required: true })} />
        </div>
        <div>
          <Label value="Cpf" />
          <Input type="text" {...register("cpf", { required: true })} />
        </div>
        <div>
          <Label value="Identificador (CNPJ)" />
          <Input type="text" {...register("identifier", { required: true })} />
        </div>
        <div>
          <Label value="Razao Social" />
          <Input type="text" {...register("corporateName", { required: true })} />
        </div>
        <div>
          <Label value="Nome Fantasia" />
          <Input type="text" {...register("businessName",{ required: true } )} />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register;
