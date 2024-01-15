import styled from "styled-components";
import { Container as Input } from "../form/Input/styles";
import Grid from "../../styles/Grid";
import { Button } from "../../styles/Button";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 2.4rem 0;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.dark600};

  & > ${Grid} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;

    & > button:last-of-type {
      @media (max-width: ${deviceBreakpoints.xl}) {
        display: none;
      }
    }
  }

  img {
    width: 100%;
    max-width: 18.5rem;
    height: auto;
  }

  ${Button} {
    position: relative;
    padding-inline: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};

    span {
      &:last-of-type {
        position: absolute;
        transform: translate(100%, -100%);
        top: 50%;
        right: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.tomato100};
        border-radius: 50%;
        line-height: 2rem;
      }
    }

    @media (max-width: ${deviceBreakpoints.xl}) {
      background-color: transparent;
      padding: 0;

      span {
        &:first-of-type {
          display: none;
        }

        &:last-of-type {
          display: flex;
        }
      }
    }
  }
`;
export const HeaderForm = styled.form`
  flex: 1;

  @media (max-width: ${deviceBreakpoints.xl}) {
    display: none;
  }

  ${Input} {
    input {
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Navigation = styled.nav`
  @media (max-width: ${deviceBreakpoints.xl}) {
    display: none;
  }
`;
