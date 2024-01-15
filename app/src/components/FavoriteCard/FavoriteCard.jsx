import React from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useDispatch } from "react-redux";
import { removeFavoritePlate } from "../../redux/favorites/actions";
import { useNavigate } from "react-router-dom";

export const FavoriteCard = ({ data }) => {
  const { image, name, id } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleRemoveFavorite() {
    dispatch(removeFavoritePlate(id));
  }

  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${image}`} alt="" />

      <div>
        <strong onClick={() => navigate(`/details/${id}`)}>{name}</strong>

        <button onClick={handleRemoveFavorite}>Remover dos Favoritos</button>
      </div>
    </Container>
  );
};
