import React, { useState } from "react";
import { Container } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Input = ({
  placeholder,
  id,
  icon,
  type = "text",
  setValue,
  label,
  noLabel,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const isPassword = type === "password";

  function handleShowPassword() {
    if (inputType === "password") {
      setInputType("text");
      setPasswordVisibility(!passwordVisibility);
    } else {
      setInputType("password");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  return (
    <Container $isPassword={isPassword} $noLabel={noLabel} $icon={icon}>
      <label htmlFor={id}>{label}</label>
      {icon && icon}
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          e.target.removeAttribute("invalid");
        }}
        {...rest}
      />

      {isPassword && (
        <button type="button" onClick={handleShowPassword}>
          {passwordVisibility ? (
            <AiOutlineEyeInvisible size="25" />
          ) : (
            <AiOutlineEye size="25" />
          )}
        </button>
      )}
    </Container>
  );
};
