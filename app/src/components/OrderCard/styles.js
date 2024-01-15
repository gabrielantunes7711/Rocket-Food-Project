import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 7.2rem;
    height: 7.2rem;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    font-weight: 500;

    span {
      color: ${({ theme }) => theme.colors.light400};
      font-size: 1.4rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  button {
    display: flex;
    align-items: center;
  }
`;

export const Exclude = styled.button`
  color: ${({ theme }) => theme.colors.tomato400};
  font-size: 1.2rem;
`;
