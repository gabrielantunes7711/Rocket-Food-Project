import styled from "styled-components";

export const DefaultForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  flex-shrink: 0;
  padding: 6.4rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.dark700};

  h2 {
    color: ${({ theme }) => theme.colors.fontWhite};
  }

  button {
    align-self: stretch;
  }

  a {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.light100};
  }
`;
