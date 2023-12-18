import styled, { css } from "styled-components";

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

export const FooterTopPart = styled.div`
  padding-bottom: 70px;
  display: flex;
  gap: 130px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;
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
  svg {
    path {
      fill: #ffffff;
    }
  }
`;

export const SocialLinkContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;
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

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const FooterBottomPart = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterTermsLink = styled.a`
  ${stylesForFooterLink};

  color: ${({ theme }) => theme.colors.white};

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
