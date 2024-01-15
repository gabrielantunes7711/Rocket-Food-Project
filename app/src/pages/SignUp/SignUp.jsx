import React, { useRef, useState } from "react";
import { Container, Left, Right } from "../SignIn/styles";
import brand from "../../../public/images/brand.png";
import { DefaultForm } from "../../styles/DefaultForm";
import { Input } from "../../components/form/Input/Input";
import { Button } from "../../styles/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import FormValidator from "../../utils/FormValidator";
import Swal from "sweetalert2";
import { Loading } from "../../components/Loading/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const navigate = useNavigate();

  async function handleCreateUser(data) {
    const formValidator = new FormValidator(formRef.current);
    setLoading(true);

    if (formValidator.validate()) {
      await api
        .post("/users", data)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Usuário cadastrado com sucesso",
            confirmButtonText: "Fazer login",
          }).then((result) => {
            setLoading(false);
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        })
        .catch((error) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: error.response.data.message,
            confirmButtonText: "Ok",
          });
        });
    } else {
      setLoading(false);
    }
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

            const data = {
              name,
              email,
              password,
            };

            handleCreateUser(data);
          }}
          ref={formRef}
          noValidate
        >
          <h2>Crie sua conta</h2>

          <Input
            label="Seu nome"
            id="name"
            placeholder="Exemplo: Gabriel Antunes"
            setValue={setName}
            data-required
          />

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@email.com"
            setValue={setEmail}
            data-required
            title="Seu email"
          />

          <Input
            label="Senha"
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            setValue={setPassword}
            data-required
            data-password
          />

          <Input
            label="Confirme sua senha"
            id="passwordConfirmation"
            type="password"
            placeholder="Digite sua senha"
            setValue={setPasswordConfirmation}
            data-required
            data-password
          />

          <Button>Criar conta</Button>

          <Link to="/">Já tenho uma conta</Link>
        </DefaultForm>
      </Right>
    </Container>
  );
};

export default SignUp;
