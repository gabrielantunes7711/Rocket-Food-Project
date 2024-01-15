import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.light400};
    line-height: 1;
  }
`;
