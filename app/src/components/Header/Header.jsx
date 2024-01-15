import React, { useEffect, useState } from "react";
import { Container, HeaderForm, Navigation } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import brand from "../../../public/images/brand.png";
import { Input } from "../form/Input/Input";
import { FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { Button } from "../../styles/Button";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";
import Grid from "../../styles/Grid";
import { Hamburger } from "../Hamburger/Hamburger";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { useSelector } from "react-redux";
import { USER_ROLES } from "../../utils/roles";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [menuMobileVisibility, setMenuMobileVisibility] = useState(false);
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const { totalProducts } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );

  const { signOut, user } = useAuth();

  async function handleSignOut() {
    await signOut();
    navigate("/");
    window.location.reload();
  }

  useEffect(() => {
    if (search) {
      searchParams.set("search", search);
    } else {
      searchParams.delete("search");
    }

    navigate(`?${searchParams.toString()}`);
  }, [search]);

  return (
    <Container>
      <MenuMobile
        setMenu={setMenuMobileVisibility}
        visibility={menuMobileVisibility}
      />

      <Grid>
        <Hamburger onClick={() => setMenuMobileVisibility(true)} />

        <Link to="/">
          <img src={brand} alt="Food Explorer" />
        </Link>

        <HeaderForm
          onSubmit={(e) => {
            e.preventDefault();

            navigate(`/?${searchParams.toString()}`);
          }}
        >
          <Input
            icon={<FiSearch size={24} />}
            id="s"
            label="Busque por pratos ou ingredientes"
            placeholder="Busque por pratos ou ingredientes"
            name="search"
            noLabel
            setValue={setSearch}
            value={search}
          />
        </HeaderForm>

        {user.role === USER_ROLES.CUSTOMER && (
          <Navigation>
            <Link to="/favorites">Meus Favoritos</Link>
          </Navigation>
        )}

        {user.role === USER_ROLES.ADMIN ? (
          <Button onClick={() => navigate("/new-plate")}>Novo prato</Button>
        ) : (
          <Button onClick={() => navigate("/order")}>
            <PiReceipt size={32} />
            <span>Pedidos ({totalProducts})</span>
            <span>{totalProducts}</span>
          </Button>
        )}

        <button onClick={handleSignOut}>
          <GoSignOut size={30} color="white" />
        </button>
      </Grid>
    </Container>
  );
};
