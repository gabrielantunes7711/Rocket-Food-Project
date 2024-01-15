import React from "react";
import { Container, Top, Nav } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../form/Input/Input";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export const MenuMobile = ({ setMenu, visibility }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    navigate("/");
    window.location.reload();
  }

  return (
    <Container $visibility={visibility}>
      <Top>
        <button onClick={() => setMenu(false)}>
          <AiOutlineClose size={30} />
          Menu
        </button>
      </Top>

      <form>
        <Input
          icon={<FiSearch size={24} />}
          id="s"
          label="Busque por pratos ou ingredientes"
          placeholder="Busque por pratos ou ingredientes"
          name="q"
          noLabel
        />
      </form>

      <Nav>
        <ul>
          <li>
            <button onClick={handleSignOut}>Sair</button>
          </li>

          <li>
            <Link to="/favorites">Meus Favoritos</Link>
          </li>
        </ul>
      </Nav>

      <Footer />
    </Container>
  );
};
