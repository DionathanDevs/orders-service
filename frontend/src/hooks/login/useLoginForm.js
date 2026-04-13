import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.email("Por favor, digite um e-mail válido."),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

const api = "http://localhost:3000/api/v1/auth/login";

function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function submitLogin(data) {
    try {
      const response = await axios.post(api, data);
      return console.log(response);
    } catch (err) {
      console.log(err);
      console.log("err data:" + err.data);
      throw Error(err);
    }
  }

  return { handleSubmit, register, errors, submitLogin };
}

export default useLoginForm;
