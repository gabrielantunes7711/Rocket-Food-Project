import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > span {
    color: ${({ theme }) => theme.light400};
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    padding: 0.85rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.dark900};
    border-radius: 0.8rem;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: ${({ $isNew }) => ($isNew ? "15rem" : "max-content")};
  color: ${({ theme }) => theme.colors.light100};
  padding: ${({ $isNew }) => ($isNew ? "0 1.6rem" : "0.6rem 1.6rem")};
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.colors.light600};
  border-radius: 0.8rem;
  border: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.colors.light500}` : "none"};

  input {
    background-color: transparent;
    border: none;
    outline: none;
    height: 2.7rem;
    width: 100%;

    font: inherit;
    color: ${({ theme }) => theme.colors.light100};

    ::placeholder {
      color: var(--light-light-500, #7c7c8a);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 700;

    svg {
      pointer-events: none;
    }
  }
`;
