import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const AcquaintanceSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparentGrey};
`;

export const SolveProblemTitleH2 = styled.h2<IWindowWidth>`
  max-width: 1000px;
  font-weight: 600;
  font-size: 72px;
  line-height: 96px;

  ${({ windowWidth }) => css`
    ${windowWidth < 852 &&
    css`
      font-size: 50px;
      line-height: 75px;
    `}

    ${windowWidth < 500 &&
    css`
      font-size: 40px;
      line-height: 60px;
    `}
  `}
`;

export const TitleDescription = styled.p<IWindowWidth>`
  margin-top: 24px;
  max-width: 800px;
  font-size: 18px;
  line-height: 32px;

  ${({ windowWidth }) => css`
    ${windowWidth < 852 &&
    css`
      max-width: 700px;
      font-size: 15px;
      line-height: 28px;
    `}
  `}
`;

export const ButtonsContainer = styled.div<IWindowWidth>`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 500 &&
    css`
      gap: 10px;
      flex-direction: column;
    `}
  `}
`;

export const WorkupSiteImageContainer = styled.div<IWindowWidth>`
  margin-top: 10px;

  ${({ windowWidth }) => css`
    ${windowWidth < 500 &&
    css`
      margin-top: 30px;
    `}
  `}
`;

export const WorkupSiteImage = styled.img<IWindowWidth>`
  margin-left: -68px;
  max-width: 100%;
  height: auto;

  ${({ windowWidth }) => css`
    ${windowWidth < 500 &&
    css`
      margin-left: -38px;
    `}
  `}
`;
