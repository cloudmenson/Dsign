import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const AboutUsSection = styled.section<IWindowWidth>`
  position: relative;
  padding: 150px 0 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      padding: 120px 0 270px;
    `}

    ${windowWidth < 769 &&
    css`
      padding: 80px 0 270px;
    `}
  `}
`;

export const AboutUsTitleH2 = styled.h2<IWindowWidth>`
  font-size: 60px;
  font-weight: 600;
  line-height: 60px;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      font-size: 50px;
      line-height: 50px;
    `}

    ${windowWidth < 376 &&
    css`
      font-size: 38px;
      line-height: 55px;
    `}
  `}
`;

export const AboutUsDescription = styled.p<IWindowWidth>`
  margin-top: 15px;
  max-width: 570px;
  font-size: 18px;
  line-height: 28px;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      font-size: 15px;
      line-height: 23px;
    `}
  `}
`;

export const UIDesigner = styled.div``;

export const People = styled.img<IWindowWidth>`
  margin-left: -90px;
  max-width: 90%;
  height: auto;

  ${({ windowWidth }) => css`
    ${windowWidth < 1024 &&
    css`
      display: none;
    `}
  `}
`;

export const JonyScottyBlock = styled.div<IWindowWidth>`
  position: absolute;
  top: 44%;
  left: 30%;
  max-width: 480px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1025 &&
    css`
      left: 27%;
      max-width: 444px;
    `}

    ${windowWidth < 1024 &&
    css`
      position: static;
      margin-top: 50px;
    `}
  `}
`;

export const JonnyScottyImage = styled.img<IWindowWidth>`
  margin-bottom: 30px;
  width: 142px;
  height: 142px;

  ${({ windowWidth }) => css`
    ${windowWidth < 1025 &&
    css`
      width: 122px;
      height: 122px;
    `}
  `}
`;

export const JonyScottyBackground = styled.div`
  padding: 20px;
  border-radius: 15px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 1px 2px 0 ${theme.colors.aboutUsBoxShadow};
  `}
`;

export const JonyScottySubtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const JonyScottyTitleH3 = styled.h3`
  margin-top: 8px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;

export const JonyScottyDesignerH4 = styled.h4`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;
