import styled from "styled-components";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";
import { Button } from "../../styles/Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin-top: 4rem;

  @media (max-width: ${deviceBreakpoints.md}) {
    flex-direction: column;
  }

  img {
    width: 100%;
    max-width: 39rem;
    height: auto;
    object-fit: cover;
    border-radius: 50%;

    @media (max-width: ${deviceBreakpoints.xl}) {
      max-width: 25rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  h1 {
    font-size: 4rem;
    font-weight: 500;

    @media (max-width: ${deviceBreakpoints.xl}) {
      font-size: 3rem;
    }

    @media (max-width: ${deviceBreakpoints.md}) {
      text-align: center;
      margin-inline: auto;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.4rem;
    line-height: 140%;

    @media (max-width: ${deviceBreakpoints.xl}) {
      font-size: 1.8rem;
    }
  }

  ${Button} {
    @media (max-width: ${deviceBreakpoints.md}) {
      margin-inline: auto;
    }
  }
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2.4rem;

  @media (max-width: ${deviceBreakpoints.md}) {
    justify-content: center;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    &:last-of-type {
      margin-left: 1.8rem;
      padding-inline: 2.2rem;
      font-family: ${({ theme }) => theme.fonts.secondary};
      line-height: 2.4rem;
    }
  }
`;

export const IngredientTag = styled.span`
  display: flex;
  padding: 0.6rem 0.9rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.dark1000};
  color: ${({ theme }) => theme.colors.light100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.4rem;
  font-weight: 500;
`;
