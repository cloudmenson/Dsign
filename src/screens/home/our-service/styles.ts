import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const OurServiceSection = styled.section`
  padding: 50px 0;
`;

export const WeProvideThatService = styled.div<IWindowWidth>`
  padding: 50px 0;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 1150 &&
    css`
      flex-direction: column;
      text-align: center;
    `}

    ${windowWidth < 769 &&
    css`
      margin-top: 150px;
    `}
  `}
`;

export const WeProvideThatServiceLeftPart = styled.div<IWindowWidth>`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 512px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1150 &&
    css`
      margin-right: 0;
      max-width: 750px;
      align-items: center;
    `}
  `}
`;

export const OurServiceH2 = styled.h2<IWindowWidth>`
  font-size: 60px;
  line-height: 80px;
  font-weight: 600;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      font-size: 50px;
      line-height: 75px;
    `}

    ${windowWidth < 376 &&
    css`
      font-size: 42px;
      line-height: 55px;

    `}
  `}
`;

export const OurServiceText = styled.p<IWindowWidth>`
  margin-top: 20px;
  font-size: 18px;
  line-height: 33px;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      font-size: 15px;
      line-height: 28px;
    `}
  `}
`;

export const OurServiceLink = styled.a`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.blue};

  &:hover {
    letter-spacing: 1px;
    opacity: 1;
  }
`;

export const OurServiceLinkSpan = styled.span`
  margin-right: 6px;
`;

export const WeProvideThatServiceRightPart = styled.div<IWindowWidth>`
  padding: 15px;
  max-width: 580px;
  background-size: 490px;
  background-repeat: no-repeat;
  border-radius: 20px;

  ${({ theme, windowWidth }) => css`
    background-image: linear-gradient(
      to left,
      ${theme.colors.ourNetworkBackground},
      ${theme.colors.ourNetworkBackground}
    );

    ${windowWidth < 1150 &&
    css`
      margin-top: 40px;
      max-width: 100%;
      background-size: 100%;
    `}

    ${windowWidth < 997 &&
    css`
      max-width: 670px;
    `}
  `}
`;

export const RightPartContent = styled.div<IWindowWidth>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 24px 30px;
  z-index: 10;

  ${({ windowWidth }) => css`
    ${windowWidth < 1150 &&
    css`
      margin-right: 0;
      flex-wrap: nowrap;
      flex-direction: row;
      gap: 20px;
    `}

    ${windowWidth < 997 &&
    css`
      flex-wrap: wrap;
      justify-content: center;
    `}
  `}
`;

const stylesForOurServiceElement = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 252px;
  border-radius: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 20px 25px -5px ${theme.colors.ourServiceBoxShadow};
  `}
`;

export const OurElement = styled.div<IWindowWidth>`
  ${stylesForOurServiceElement}

  ${({ windowWidth }) => css`
    ${windowWidth < 1150 &&
    css`
      padding: 15px;
    `}
  `}

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      padding: 22px 15px;
      max-width: 300px;
    `}
  `}

  ${({ windowWidth }) => css`
    ${windowWidth < 500 &&
    css`
      padding: 15px;
      max-width: 260px;
    `}
  `}
`;

export const OurElementH4 = styled.h4<IWindowWidth>`
  margin-top: 20px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      font-size: 18px;
      line-height: 22px;
    `}
  `}
`;

export const OurElementSubtitle = styled.p<IWindowWidth>`
  margin-top: 8px;
  font-size: 18px;
  line-height: 28px;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      font-size: 18px;
      line-height: 22px;
    `}
  `}
`;
