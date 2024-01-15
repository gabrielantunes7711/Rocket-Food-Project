import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.light300};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.4rem;
  font-weight: 700;
`;
