import { useState } from "react";

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

  function submit(e) {
    return e.preventDefault();
  }

  return {
    form,
    change,
    submit,
  };
}

export default useLoginForm;
