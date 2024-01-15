import styled from "styled-components";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2.4rem;
  height: 1.8rem;
  flex-shrink: 0;

  @media (max-width: ${deviceBreakpoints.xl}) {
    display: flex;
  }

  &:hover {
    span {
      &:nth-of-type(1) {
        width: 50%;
      }

      &:nth-of-type(2) {
        width: 75%;
      }
    }
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.light100};
    border-radius: 2rem;
    transition: all ease 300ms;
  }
`;
