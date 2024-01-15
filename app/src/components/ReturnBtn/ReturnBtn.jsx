import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Container } from "./styles";

export const ReturnBtn = ({ ...props }) => {
  return (
    <Container to={-1} {...props}>
      <FaChevronLeft />
      voltar
    </Container>
  );
};
