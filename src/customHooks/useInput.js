import React from "react";

export default function useInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  const Input = ({ id, name, type = "text" }) => (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      id={id}
      name={name}
    />
  );

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: { value, onChange: (e) => setValue(e.target.value) },
    Input
  };
}
