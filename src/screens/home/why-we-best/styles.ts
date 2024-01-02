import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const WhyWeBestSection = styled.section<IWindowWidth>`
  position: relative;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 1240 &&
    css`
      justify-content: center;
    `}

    ${windowWidth < 769 &&
    css`
      margin-top: 80px;
    `}

    ${windowWidth < 426 &&
    css`
      margin-top: 50px;
    `}
  `}
`;

export const WhyWeBestSectionLeftPart = styled.div<IWindowWidth>`
  ${({ windowWidth }) => css`
    ${windowWidth < 768 &&
    css`
      display: none;
    `}
  `}
`;

export const TabletImage = styled.img<IWindowWidth>`
  max-width: 600px;
  height: auto;
  z-index: -1;

  ${({ windowWidth }) => css`
    ${windowWidth < 1240 &&
    css`
      position: absolute;
      top: -50px;
      right: 0;
    `}

    ${windowWidth < 1025 &&
    css`
      max-width: 400px;
    `}
  `}
`;

export const WhyWeBestSectionRightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
`;

export const WhyWeBestTitleH2 = styled.h2<IWindowWidth>`
  font-size: 48px;
  line-height: 48px;
  font-weight: 600;

  ${({ windowWidth }) => css`
    ${windowWidth < 1240 &&
    css`
      margin: 0 auto;
    `}

    ${windowWidth < 376 &&
    css`
      font-size: 42px;
      line-height: 42px;
    `}
  `}
`;

export const WhyWeBestSubtitle = styled.p<IWindowWidth>`
  margin-top: 15px;
  font-size: 18px;
  line-height: 23px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1240 &&
    css`
      text-align: center;
    `}

    ${windowWidth < 997 &&
    css`
      font-size: 15px;
    `}
  `}
`;

export const WhyWeBestElementContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const WhyWeBestElementWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const IconWrapper = styled.div`
  padding: 8px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.whyWeBestBackground};
`;

export const WrapperForWyWeBestTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 550px;
`;

export const WyWeBestElementTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const WyWeBestElementsSubtitle = styled.p<IWindowWidth>`
  margin-top: 5px;
  font-size: 18px;
  line-height: 25px;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      font-size: 15px;
    `}
  `}
`;
