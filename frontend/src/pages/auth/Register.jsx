import Label from "../../components/Label.jsx";
import Input from "../../components/Input.jsx";
import useRegisterForm from "../../hooks/register/useRegisterForm.js";

function Register() {
  const { form, submit, change } = useRegisterForm();
  return (
    <div>
      <h1>ben vubdi</h1>
      <form onSubmit={submit}>
        <div>
          <Label value="Nome" />
          <Input type="text" name="nome" onChange={change} value={form.nome} />
        </div>
        <div>
        <Label value="Sobrenome" />
        <Input
          type="text"
          name="sobrenome"
          onChange={change}
          value={form.sobrenome}
        />
        </div>
      </form>
    </div>
  );
}

export default Register;
