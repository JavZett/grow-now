import { useState } from 'react';

export function useForm(valorInicial = {}) {
  const [values, setValues] = useState(valorInicial);
  const reset = () => {
    setValues(valorInicial);
  };
  const handleInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };
  return [values, handleInputChange, reset];
}
