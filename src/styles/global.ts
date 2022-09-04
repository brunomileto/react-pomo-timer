/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.gray500}
  }

  body{
    background: ${(props) => props.theme.gray900};
    color: ${(props) => props.theme.gray300};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;
