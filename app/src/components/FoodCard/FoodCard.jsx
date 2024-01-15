import React, { useEffect, useState } from "react";
import { Container, Title, Description, Price, Controls } from "./styles";
import { BsPencil } from "react-icons/bs";
import { BiMinus, BiPlus, BiHeart, BiSolidHeart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cart/actions";
import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";
import { api } from "../../services/api";
import Skeleton from "react-loading-skeleton";
import {
  addFavoritePlate,
  removeFavoritePlate,
} from "../../redux/favorites/actions";

export const FoodCard = ({ data }) => {
  const [quantity, setQuantity] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const { image, name, description, price, id } = data;
  const priceTreated = price.replace(".", ",");
  const { favorites } = useSelector(
    (rootReducer) => rootReducer.favoriteReducer
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();

  function handleAddProduct() {
    if (quantity === 0) return;
    dispatch(addCart({ ...data, quantity }));
    setQuantity(0);
  }

  function handleAddFavorite() {
    dispatch(addFavoritePlate({ ...data }));
  }

  function handleRemoveFavorite() {
    dispatch(removeFavoritePlate(id));
  }

  useEffect(() => {
    const isFavorite = favorites.some((favorite) => favorite.id === id);

    if (isFavorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [favorites]);

  return (
    <Container>
      {user.role === USER_ROLES.ADMIN ? (
        <button
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        >
          <BsPencil size={24} />
        </button>
      ) : favorite ? (
        <button onClick={handleRemoveFavorite}>
          <BiSolidHeart size={24} />
        </button>
      ) : (
        <button onClick={handleAddFavorite}>
          <BiHeart size={24} />
        </button>
      )}

      <img src={`${api.defaults.baseURL}/files/${image}`} alt="" />

      <Title>
        <Link to={`/details/${id}`}>{name}</Link>
      </Title>

      <Description>{description}</Description>

      <Price>R$ {priceTreated}</Price>

      {user.role === USER_ROLES.CUSTOMER && (
        <Controls>
          <button
            onClick={() => (quantity !== 0 ? setQuantity(quantity - 1) : null)}
          >
            <BiMinus size={24} />
          </button>

          <span>{String(quantity).padStart(2, "0")}</span>

          <button onClick={() => setQuantity(quantity + 1)}>
            <BiPlus size={24} />
          </button>

          <Button onClick={handleAddProduct}>Incluir</Button>
        </Controls>
      )}
    </Container>
  );
};

export const FoodCardSkeleton = () => {
  const { user } = useAuth();

  return (
    <Container>
      <button>
        <Skeleton width="2.4rem" height="2.4rem" borderRadius="50%" />
      </button>

      <Skeleton width="17.6rem" height="17.6rem" borderRadius="50%" />

      <Title>
        <Skeleton width="22.7rem" height="3.3rem" />
      </Title>

      <Description>
        <Skeleton width="16rem" height="2rem" />
      </Description>

      <Price>
        <Skeleton width="12.3rem" height="4rem" />
      </Price>

      {user.role === USER_ROLES.CUSTOMER && (
        <Controls>
          <span>
            <Skeleton width="1.4rem" height="1.4rem" />
          </span>

          <span>
            <Skeleton width="2.4rem" height="2.4rem" />
          </span>

          <span>
            <Skeleton width="1.4rem" height="1.4rem" />
          </span>

          <span>
            <Skeleton width="10rem" height="4.5rem" />
          </span>
        </Controls>
      )}
    </Container>
  );
};
