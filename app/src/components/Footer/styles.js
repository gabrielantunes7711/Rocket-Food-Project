import styled from "styled-components";
import Grid from "../../styles/Grid";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark600};
  display: flex;
  align-items: center;
  padding: 2.3rem 0;

  & > ${Grid} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: ${deviceBreakpoints.sm}) {
      flex-direction: column;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.light200};
    font-size: 1.4rem;
  }
`;
