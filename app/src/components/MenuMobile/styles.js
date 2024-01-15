import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  transform: ${({ $visibility }) =>
    $visibility ? "none" : "translateX(100%)"};
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark400};
  color: ${({ theme }) => theme.colors.light100};
  transition: all ease 300ms;

  form {
    margin: 3.6rem 3rem;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 8rem;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.colors.dark700};

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.light100};
    font-size: 2.1rem;
  }
`;

export const Nav = styled.div`
  flex: 1;
  margin: 0 3rem;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
  }

  li {
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark1000};

    & > * {
      color: ${({ theme }) => theme.colors.light300};
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: 2.4rem;
      font-weight: 300;
    }
  }
`;
