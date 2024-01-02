import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

const stylesForFooterLink = css`
  font-size: 14px;
  line-height: 20px;
  transition: all 0.2s;
`;

export const Footer = styled.footer`
  position: relative;
  padding: 250px 0 30px;
  display: flex;
  flex-direction: column;
`;

export const FooterTopPart = styled.div<IWindowWidth>`
  padding-bottom: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme, windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${theme.colors.white};
    `}
  `}
`;

export const FooterBackgroundColor = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 50vw);
  right: calc(50% - 50vw);
  background-color: ${({ theme }) => theme.colors.footerBackground};
  z-index: -1;
`;

export const Logo = styled.a`
  ${({ theme }) => css`
    svg {
      path {
        fill: ${theme.colors.white};
      }
    }
  `}
`;

export const FooterLinksWrapperForDirections = styled.div<IWindowWidth>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 150px;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      gap: 200px;
    `}

    ${windowWidth < 376 &&
    css`
      gap: 80px;
    `}
  `}
`;

export const SocialLinkContainer = styled.div<IWindowWidth>`
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      justify-content: center;
    `}
  `}
`;

export const SocialLink = styled.a`
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.socialLinkBackground};
  transition: all 0.5s;

  &:hover {
    transform: translate(0, -12px);
  }
`;

export const FooterLinksContainer = styled.div<IWindowWidth>`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      align-items: center;
    `}
  `}
`;

export const FooterLink = styled.a`
  ${stylesForFooterLink};

  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}

  &:hover {
    opacity: 0.75;
  }
`;

export const FooterCompanyDetails = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

export const FooterCompanyDetailsItem = styled.h5`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterBottomPart = styled.div<IWindowWidth>`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 621 &&
    css`
      gap: 15px;
      flex-direction: column;
    `}
  `}
`;

export const FooterTermsLink = styled.a<IWindowWidth>`
  ${({ theme, windowWidth }) => css`
    ${stylesForFooterLink};

    color: ${theme.colors.white};

    ${windowWidth < 769 &&
    css`
      font-size: 12px;
    `}
  `}

  &:hover {
    opacity: 0.75;
  }
`;

export const StyleForFooterTermsLink = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterPartition = styled.span`
  margin: 0 15px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
`;
