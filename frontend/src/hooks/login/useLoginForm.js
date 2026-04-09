import { useState } from "react";
import axios from "axios";

function useLoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function change(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/v1/auth/login",
        data: {
          ...form,
        },
      });
      console.log("Dados enviados com sucesso:", response.data);
      alert("Formulário enviado!");
    } catch (error) {
      console.error("Motivo da recusa do servidor:", error.response?.data);
    }
  }

  return {
    form,
    change,
    submit,
  };
}

export default useLoginForm;
