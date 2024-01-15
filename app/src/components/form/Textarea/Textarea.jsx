import React from "react";
import { Container } from "./styles";

export const Textarea = ({
  placeholder,
  id,
  setValue,
  label,
  noLabel,
  ...rest
}) => {
  return (
    <Container $noLabel={noLabel}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows="8"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      ></textarea>
    </Container>
  );
};
