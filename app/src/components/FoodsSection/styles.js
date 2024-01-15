import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.section`
  margin-bottom: 6rem;

  h2 {
    margin-bottom: 22px;
  }
`;

export const PlatesCarousel = styled(Swiper)`
  .swiper-slide {
    width: auto;
    height: auto;
  }
`;
