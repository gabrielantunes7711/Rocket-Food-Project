import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  input {
    display: none;
  }

  label,
  button {
    position: absolute;
    right: 2.6rem;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.dark900};
    cursor: pointer;
  }

  button {
    left: 2.6rem;
    color: ${({ theme }) => theme.colors.tomato300};
  }
`;
