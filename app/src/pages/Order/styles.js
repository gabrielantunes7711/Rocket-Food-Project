import styled from "styled-components";

export const Container = styled.div`
  h2 {
    margin-bottom: 4rem;
  }
`;

export const TotalOrderValue = styled.strong`
  display: block;
  margin-top: 2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  font-weight: 500;
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
