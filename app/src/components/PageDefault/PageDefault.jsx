import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container } from "./styles";

const PageDefault = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default PageDefault;
