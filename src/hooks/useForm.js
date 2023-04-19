import { useState } from 'react';

const URL = 'http://localhost:3000/todos/';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    const newValues = { ...form, [e.target.name]: e.target.value };

    setForm(newValues);
  };

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.keys(validateForm(form)).length === 0) {
      setLoading(true);

      try {
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        });
        setLoading(false);
        setResponse(true);
        setTimeout(() => setResponse(false), 3000);
        setForm(initialForm);
      } catch (error) {
        setLoading(false);
        setResponse(error.status);
        setForm(initialForm);
      }
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
