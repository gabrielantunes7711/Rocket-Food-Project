import React from "react";
import { Container, PlatesCarousel } from "./styles";
import { FoodCard, FoodCardSkeleton } from "../../components/FoodCard/FoodCard";
import Grid from "../../styles/Grid";
import { SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

export const FoodsSection = ({ title, data }) => {
  return (
    <Container>
      <Grid>
        <h2>{title}</h2>

        <PlatesCarousel spaceBetween={30} slidesPerView="auto">
          {data.map((plate, i) => (
            <SwiperSlide key={i}>
              <FoodCard data={plate} />
            </SwiperSlide>
          ))}
        </PlatesCarousel>
      </Grid>
    </Container>
  );
};

export const FoodsSectionSkeleton = () => {
  return (
    <Container>
      <Grid>
        <h2>
          <Skeleton width="20rem" height="3rem" />
        </h2>

        <PlatesCarousel spaceBetween={30} slidesPerView="auto">
          {[...Array(4)].map((_, i) => (
            <SwiperSlide key={i}>
              <FoodCardSkeleton />
            </SwiperSlide>
          ))}
        </PlatesCarousel>
      </Grid>
    </Container>
  );
};
