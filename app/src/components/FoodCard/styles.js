import styled from "styled-components";
import { deviceBreakpoints } from "../../styles/deviceBreakpoints";
import { Button } from "../../styles/Button";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  width: 30rem;
  height: 100%;
  padding: 6.6rem 2.4rem 2.4rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
  background: ${({ theme }) => theme.colors.dark200};

  @media (max-width: ${deviceBreakpoints.lg}) {
    width: 22rem;
  }

  & > button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.light100};
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;

    @media (max-width: ${deviceBreakpoints.lg}) {
      width: 10rem;
      height: 10rem;
    }
  }
`;
export const Title = styled.h3`
  font-size: 2.4rem;

  @media (max-width: ${deviceBreakpoints.lg}) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.light400};
  font-size: 1.4rem;
  line-height: 160%;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.cake200};
  font-size: 3.2rem;
  line-height: 160%;
  margin-top: auto;

  @media (max-width: ${deviceBreakpoints.lg}) {
    font-size: 2.6rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  ${Button} {
    @media (max-width: 1023px) {
      padding-block: 0.8rem;
    }
  }
`;
