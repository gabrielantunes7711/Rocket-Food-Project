import styled from "styled-components";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
  h2 {
    margin-bottom: 2rem;
  }
`;

export const FavoritesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5.5rem;
  margin-top: 50px;

  @media (max-width: ${deviceBreakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${deviceBreakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${deviceBreakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
