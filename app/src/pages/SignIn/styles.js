import styled from "styled-components";
import { DefaultForm } from "../../styles/DefaultForm";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  gap: 10rem;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 7.3rem;

    ${DefaultForm} {
      background-color: transparent;
      padding: 0;
    }
  }

  @media (max-height: 750px) {
    gap: 3rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    max-width: 27.8rem;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 47.6rem;

  @media (max-width: 1023px) {
    max-width: 27.8rem;
  }
`;
