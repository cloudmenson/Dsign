import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const FactItemContainer = styled.div<IWindowWidth>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 1080 &&
    css`
      gap: 50px;
      flex-wrap: wrap;
    `}
  `}
`;

export const FactItemElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconSpan = styled.span`
  padding: 8px;
  border-radius: 10px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.transparentGrey};
  `}
`;

export const Execution = styled.h2<IWindowWidth>`
  margin-top: 22px;
  font-weight: 600;
  font-size: 60px;
  line-height: 60px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1080 &&
    css`
      font-size: 48px;
      line-height: 40px;
    `}
  `}
`;

export const Title = styled.h3<IWindowWidth>`
  margin-top: 22px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1080 && css``}
  `}
`;

export const Subtitle = styled.p<IWindowWidth>`
  margin-top: 10px;
  font-size: 18px;
  line-height: 28px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1080 &&
    css`
      max-width: 350px;
      font-size: 16px;
    `}
  `}
`;
