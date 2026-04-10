import { useState } from "react";
import axios from "axios";

function useRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    cpf: "",
    identifier: "",
    corporateName: "",
    businessName: "",
  });

  function change(e) {
    setForm({
      ...form,
      [e.target.value]: e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post({
        method: "post",
        url: "",
        data: { ...form },
      });

      console.log(response);
      alert("Enviado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  return {
    form,
    change,
    submit,
  };
}

export default useRegisterForm;
