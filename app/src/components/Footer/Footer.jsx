import React from "react";
import { Container } from "./styles";
import Grid from "../../styles/Grid";
import { Link } from "react-router-dom";
import brandFooterImg from "../../../public/images/brand-footer.png";

export const Footer = () => {
  return (
    <Container>
      <Grid>
        <Link to="/">
          <img src={brandFooterImg} alt="Food Explorer Logo" />
        </Link>

        <span>© 2023 - Todos os direitos reservados.</span>
      </Grid>
    </Container>
  );
};
