import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    transition: all 0.50s linear;
    padding: ${({ theme }) => theme.padding};
    margin: ${({ theme }) => theme.margin};
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
