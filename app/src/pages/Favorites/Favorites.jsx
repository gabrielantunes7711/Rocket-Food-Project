import React from "react";
import PageDefault from "../../components/PageDefault/PageDefault";
import { Container, FavoritesWrapper } from "./styles";
import Grid from "../../styles/Grid";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../services/api";
import favoriteReducer from "../../redux/favorites/reducer";
import { removeFavoritePlate } from "../../redux/favorites/actions";
import { FavoriteCard } from "../../components/FavoriteCard/FavoriteCard";

export const Favorites = () => {
  const { favorites } = useSelector(
    (rootReducer) => rootReducer.favoriteReducer
  );
  const dispatch = useDispatch();

  return (
    <PageDefault>
      <Container>
        <Grid>
          <h2>Meus Favoritos</h2>

          {favorites.length === 0 && (
            <span>Opa, parece que você não tem nenhum favorito salvo :(</span>
          )}

          <FavoritesWrapper>
            {favorites.map((favorite, i) => (
              <FavoriteCard data={favorite} key={i} />
            ))}
          </FavoritesWrapper>
        </Grid>
      </Container>
    </PageDefault>
  );
};
