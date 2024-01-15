import React, { useState } from "react";
import { Container, Left, Right } from "./styles";
import brand from "../../../public/images/brand.png";
import { DefaultForm } from "../../styles/DefaultForm";
import { Input } from "../../components/form/Input/Input";
import { Button } from "../../styles/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Loading } from "../../components/Loading/Loading";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  async function handleSignIn() {
    setLoading(true);
    document.activeElement.blur();
    await signIn({ email, password });
    setLoading(false);
  }

  return (
    <Container>
      <Loading loading={loading} />
      <Left>
        <img src={brand} alt="Food Explorer" />
      </Left>
      <Right>
        <DefaultForm
          onSubmit={(e) => {
            e.preventDefault();

            handleSignIn();
          }}
        >
          <h2>Faça login</h2>

          <Input
            label="Email"
            id="email"
            placeholder="Exemplo: exemplo@email.com"
            setValue={setEmail}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            setValue={setPassword}
          />

          <Button>Entrar</Button>

          <Link to="/register">Criar uma conta</Link>
        </DefaultForm>
      </Right>
    </Container>
  );
};

export default SignIn;
