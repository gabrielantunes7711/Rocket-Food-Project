import React from "react";
import { Container } from "./styles";

export const Loading = ({ loading = false }) => {
  if (!loading) return;

  return (
    <Container>
      <span className="loader"></span>
    </Container>
  );
};
