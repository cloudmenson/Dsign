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

      &::-webkit-scrollbar {
        width: 15px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.darkPaleAzure};
        border-radius: 6px;
        border: 3px solid ${theme.colors.white};
      }
    `}
  }

  p {
    ${({ theme }) => css`
      color: ${theme.colors.slateGray};
    `}
  }

 img, svg {
    vertical-align: middle;
  }

  input {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 20px;
    border-radius: 10px;
    outline: none; 
  
    ${({ theme }) => css`
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.paleAzure};
    `}
  }

  a {
     ${({ theme }) => css`
       color: ${theme.colors.greyForHeader};
     `}
    
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    padding: none;
    list-style: none;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    text-transform: none;
  }
`;
