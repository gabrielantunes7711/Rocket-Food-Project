import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;

  img {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
    border-radius: 50%;
  }

  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
  }

  button {
    color: ${({ theme }) => theme.colors.tomato400};
    font-size: 1.2rem;
  }
`;
