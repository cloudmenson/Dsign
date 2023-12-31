import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const OurNetworkSection = styled.section`
  position: relative;
  padding: 100px 0 80px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OurNetworkBackgroundColor = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 50vw);
  right: calc(50% - 50vw);
  background-color: ${({ theme }) => theme.colors.ourNetworkBackground};
  z-index: -1;
`;

export const OurNetworkTitleH2 = styled.h2<IWindowWidth>`
  max-width: 650px;
  font-size: 60px;
  font-weight: 600;
  line-height: 80px;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
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

export const OurNetworkBackgroundImage = styled.img`
  margin-top: 50px;
  max-width: 100%;
  height: auto;
  z-index: 5;
`;

export const CountryCardWrapper = styled.div<IWindowWidth>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      flex-wrap: wrap;
      justify-content: center;
    `}
  `}
`;

export const CountryCard = styled.div`
  padding: 20px;
  max-width: 280px;
  border-radius: 15px;
  text-align: left;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 20px 25px -5px ${theme.colors.ourServiceBoxShadow};
  `}
`;

export const FlagAndCountryName = styled.div`
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.slateGray};
`;

export const CountryFlag = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

export const CountryName = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

export const CardDescription = styled.p<IWindowWidth>`
  margin-top: 8px;
  font-size: 18px;
  line-height: 28px;

  ${({ windowWidth }) => css`
    ${windowWidth < 997 &&
    css`
      line-height: 22px;
    `}

    ${windowWidth < 500 &&
    css`
      font-size: 16px;
      line-height: 22px;
    `}
  `}
`;
