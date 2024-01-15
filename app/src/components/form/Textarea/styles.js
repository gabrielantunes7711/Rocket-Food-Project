import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem 0;
  width: 100%;

  label {
    width: 100%;
    color: ${({ theme }) => theme.colors.light400};
    line-height: 1;

    ${({ $noLabel }) =>
      $noLabel &&
      css`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `}
  }

  textarea {
    flex-grow: 1;
    padding: 1.2rem 1.4rem;
    padding-left: ${({ $icon }) => ($icon ? "5rem" : "1.4rem")};
    background-color: ${({ theme }) => theme.colors.dark900};
    border: none;
    border-radius: 0.8rem;
    outline: none;
    font: inherit;
    color: white;
    resize: none;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.light100};
    }

    &[invalid] {
      outline: 1px solid ${({ theme }) => theme.colors.tomato100};
    }
  }

  svg {
    position: absolute;
    left: 1.4rem;
    bottom: 0;
    height: 4.8rem;
  }
`;
