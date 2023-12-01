import styled, { css } from "styled-components";

import { IButton } from "./types";

export const ButtonWrapper = styled.div<IButton>`
  position: relative;
  padding: 22px 60px;
  border-radius: 3px;
  transition: background 0.2s;
  cursor: pointer;

  ${({
    hover,
    border,
    margin,
    theme,
    padding,
    background,
    borderRadius,
  }) => css`
    ${hover &&
    css`
      &:hover {
        background: ${theme.colors.blue};

        ${ButtonText} {
          color: ${theme.colors.white};
        }
      }
    `}

    ${borderRadius &&
    css`
      border-radius: ${borderRadius === "circle"
        ? "0 30px 30px 40px"
        : borderRadius === "square"
          ? "3px"
          : null};
    `}

    ${borderRadius === "square" &&
    css`
      display: flex;
      justify-content: center;
      width: 100%;
    `}


    ${background &&
    css`
      background: ${background === "blue"
        ? theme.colors.blue
        : background === "paleAzure"
          ? theme.colors.paleAzure
          : null};
    `}

    ${padding &&
    css`
      padding: ${padding};
    `}

    ${margin &&
    css`
      margin: ${margin};
    `}

    ${border &&
    css`
      border: 1px solid
        ${border === "paleAzure" ? theme.colors.darkPaleAzure : null};
    `}
  `}
`;

export const ButtonText = styled.span`
  transition: color 0.2s;

  ${({ theme, color }) => css`
    ${color &&
    css`
      color: ${color === "white"
        ? theme.colors.white
        : color === "blue"
          ? theme.colors.blue
          : color === "black"
            ? theme.colors.black
            : null};
    `}
  `}
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconSpan = styled.div`
  position: absolute;
  left: 3%;
`;
