import styled, { css } from "styled-components";

import { IButton } from "./types";

export const ButtonWrapper = styled.div<IButton>`
  position: relative;
  padding: 22px 60px;
  border-radius: 3px;
  transition: background 0.2s;
  cursor: pointer;

  ${({
    theme,
    isHover,
    isBorder,
    isMargin,
    isPadding,
    isBackground,
    isBorderRadius,
  }) => css`
    ${isHover &&
    css`
      &:hover {
        background: ${theme.colors.blue};

        ${ButtonText} {
          color: ${theme.colors.white};
        }
      }
    `}

    ${isBorderRadius &&
    css`
      border-radius: ${isBorderRadius === "circle"
        ? "0 30px 30px 40px"
        : isBorderRadius === "square"
          ? "3px"
          : null};
    `}

    ${isBorderRadius === "square" &&
    css`
      display: flex;
      justify-content: center;
      width: 100%;
    `}


    ${isBackground &&
    css`
      background: ${isBackground === "blue"
        ? theme.colors.blue
        : isBackground === "paleAzure"
          ? theme.colors.paleAzure
          : null};
    `}

    ${isPadding &&
    css`
      padding: ${isPadding};
    `}

    ${isMargin &&
    css`
      margin: ${isMargin};
    `}

    ${isBorder &&
    css`
      border: 1px solid
        ${isBorder === "paleAzure" ? theme.colors.darkPaleAzure : null};
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
