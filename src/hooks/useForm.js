import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [input, setInput] = useState(initialState);
  const handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const reset = () => {
    setInput(initialState);
  };
  return [input, handleChange, reset];
};
