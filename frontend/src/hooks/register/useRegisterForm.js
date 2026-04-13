import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const api = "http://localhost:3000/api/v1/auth/register";
const schema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.email(),
  password: z.string(),
  cpf: z.string().min(11, "O Cpf deve ter no minimo 11 digitos."),
  identifier: z.string(),
  corporateName: z.string(),
  businessName: z.string(),
});

function useRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function submitRegister(data) {
    try {
      const response = await axios.post(api, data);
      return console.log(response);
    } catch (err) {
      console.log(err.data);
      throw Error(err);
    }
  }

  return { register, handleSubmit, errors, submitRegister };
}

export default useRegisterForm;
