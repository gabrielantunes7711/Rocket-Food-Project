import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;
  background: ${({ theme, $secondary }) =>
    $secondary ? theme.colors.dark800 : theme.colors.tomato100};
  color: ${({ theme }) => theme.colors.light100};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7;
  transition: all ease 300ms;

  &:hover {
    background-color: ${({ theme, $secondary }) =>
      $secondary ? theme.colors.dark1000 : theme.colors.tomato200};
  }
`;
