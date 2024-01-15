import React, { useState } from "react";
import {
  Container,
  ContentWrapper,
  IngredientsWrapper,
  Controls,
  IngredientTag,
} from "./styles";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiMinus, BiPlus, BiHeart } from "react-icons/bi";
import { Button } from "../../styles/Button";
import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";
import { addCart } from "../../redux/cart/actions";
import Skeleton from "react-loading-skeleton";

export const PlateDetailsSection = ({ data }) => {
  const { image, name, description, ingredients, price } = data;
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = (price * quantity).toFixed(2);
  const { id } = useParams();

  function handleAddProduct() {
    if (quantity <= 0) return;
    dispatch(addCart({ ...data, quantity }));
    setQuantity(1);
  }

  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${image}`} alt="" />

      <ContentWrapper>
        <h1>{name}</h1>

        <p>{description}</p>

        <IngredientsWrapper>
          {ingredients.map((ingredient, i) => (
            <IngredientTag key={i}>{ingredient}</IngredientTag>
          ))}
        </IngredientsWrapper>

        {user.role === USER_ROLES.ADMIN ? (
          <Button
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          >
            Editar prato
          </Button>
        ) : (
          <Controls>
            <button
              onClick={() => (quantity >= 2 ? setQuantity(quantity - 1) : null)}
            >
              <BiMinus size={27} />
            </button>

            <span>{String(quantity).padStart(2, "0")}</span>

            <button onClick={() => setQuantity(quantity + 1)}>
              <BiPlus size={27} />
            </button>

            <Button onClick={handleAddProduct}>
              Incluir - R$ {String(totalPrice).replace(".", ",")}
            </Button>
          </Controls>
        )}
      </ContentWrapper>
    </Container>
  );
};

export const PlateDetailsSectionSkeleton = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Skeleton width="39rem" height="39rem" borderRadius="50%" />

      <ContentWrapper>
        <h1>
          <Skeleton width="18rem" height="5rem" />
        </h1>

        <p>
          <Skeleton width="34rem" height="3rem" />
        </p>

        <IngredientsWrapper>
          <Skeleton width="8rem" height="3.3rem" />
          <Skeleton width="5rem" height="3.3rem" />
          <Skeleton width="11rem" height="3.3rem" />
          <Skeleton width="7rem" height="3.3rem" />
          <Skeleton width="6rem" height="3.3rem" />
        </IngredientsWrapper>

        {user.role === USER_ROLES.ADMIN ? (
          <span>
            <Skeleton width="13.6rem" height="4.8rem" />
          </span>
        ) : (
          <Controls>
            <Skeleton width="1.5rem" height="1.5rem" />
            <Skeleton width="2.5rem" height="2.5rem" />
            <Skeleton width="1.5rem" height="1.5rem" />
            <Skeleton width="16rem" height="4.8rem" />
          </Controls>
        )}
      </ContentWrapper>
    </Container>
  );
};
