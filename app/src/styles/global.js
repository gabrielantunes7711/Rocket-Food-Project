import { createGlobalStyle } from "styled-components";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";

export default createGlobalStyle`
  &:root {
    font-size:62.5%;

    @media (max-width: 425px) {
      font-size: 54.6874%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size:1.6rem;
    background-color: ${({ theme }) => theme.colors.dark400};
    color: ${({ theme }) => theme.colors.light300};
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.title}
  }

  h2{
    color: ${({ theme }) => theme.colors.light300};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.4;
  }

  ::placeholder{
    color: ${({ theme }) => theme.colors.light500};
    line-height: 1;
    font-size: 1.6rem;
  }

  button{
    background-color:transparent;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit
  }

  a{
    text-decoration: none;
    transition: all ease 300ms;
    font: inherit;
    color: inherit;

    &:hover{
      filter: brightness(0.8);
    }
  }

  img{
    max-width: 100%;
    height: auto;
  }

  .swal2-popup{
    font-size:1.6rem;
    background-color: ${({ theme }) => theme.colors.dark700};
    color: ${({ theme }) => theme.colors.light100};
  }

  .swal2-error{
    border-color: ${({ theme }) => theme.colors.tomato300} !important;
  }

  .swal2-x-mark-line-left,
  .swal2-x-mark-line-right{
    background-color: ${({ theme }) => theme.colors.tomato300} !important;
  }

  .swal2-confirm,
  .swal2-cancel{
    padding: 1.2rem 3.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.tomato100} !important;
    color: ${({ theme }) => theme.colors.light100};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.7;
    transition: all ease 300ms;
    box-shadow: none !important;

    &:hover {
      background-color: ${({ theme }) => theme.colors.tomato200} !important;
    }

  }
  .swal2-cancel{
    background: ${({ theme }) => theme.colors.dark800} !important;
    &:hover {
      background-color: ${({ theme }) => theme.colors.dark1000} !important;
    }
  }

  .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  }
`;
