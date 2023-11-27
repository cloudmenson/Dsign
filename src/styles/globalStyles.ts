import { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
        
    ${({ theme }) => css`
      color: ${theme.colors.midnightBlue};
      background: ${theme.colors.white};
    `}
  }

  p {
    ${({ theme }) => css`
      color: ${theme.colors.slateGray};
    `}
  }

  svg {
    vertical-align: middle;
  }

  input {
    border: none;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    padding: none;
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    text-transform: none;
  }
`;
