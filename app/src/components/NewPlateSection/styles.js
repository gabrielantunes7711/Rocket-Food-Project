import styled from "styled-components";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  h1 {
    margin: 2.4rem 0 3.2rem;
    font-weight: 500;
  }

  form {
    display: grid;
    gap: 3.2rem;
    grid-template-areas:
      "A B B B B C C"
      "D D D D D D E"
      "F F F F F F F";
    grid-template-columns: repeat(7, 1fr);
    align-items: flex-end;

    @media (max-width: ${deviceBreakpoints.lg}) {
      grid-template-areas:
        "A A A A A A A"
        "B B B B C C C"
        "D D D D D D E"
        "F F F F F F F";
    }

    @media (max-width: ${deviceBreakpoints.md}) {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    & > * {
      gap: 1.6rem;

      &:nth-child(1) {
        grid-area: A;

        @media (max-width: ${deviceBreakpoints.lg}) {
          margin: 0 auto;
          margin-bottom: 40px;
        }
      }

      &:nth-child(2) {
        grid-area: B;
      }

      &:nth-child(3) {
        grid-area: C;
      }

      &:nth-child(4) {
        grid-area: D;
      }

      &:nth-child(5) {
        grid-area: E;
      }

      &:nth-child(6) {
        grid-area: F;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3.2rem;
  grid-column: 1/-1;
`;
