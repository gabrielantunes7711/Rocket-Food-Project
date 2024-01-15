import styled from "styled-components";
import { deviceBreakpoints } from "./deviceBreakpoints";

const Grid = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;

  @media (min-width: ${deviceBreakpoints.sm}) {
    max-width: ${deviceBreakpoints.sm.replace(/\D/g, "") - 30}px;
  }
  @media (min-width: ${deviceBreakpoints.md}) {
    max-width: ${deviceBreakpoints.md.replace(/\D/g, "") - 30}px;
  }
  @media (min-width: ${deviceBreakpoints.lg}) {
    max-width: ${deviceBreakpoints.lg.replace(/\D/g, "") - 30}px;
  }
  @media (min-width: ${deviceBreakpoints.xl}) {
    max-width: ${deviceBreakpoints.xl.replace(/\D/g, "") - 30}px;
  }
  @media (min-width: ${deviceBreakpoints.xxl}) {
    max-width: ${deviceBreakpoints.xxl.replace(/\D/g, "") - 30}px;
  }
`;

export default Grid;
