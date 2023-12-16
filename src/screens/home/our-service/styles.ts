import styled, { css } from "styled-components";

export const OurServiceSection = styled.section`
  padding: 50px 0;
`;

export const WeProvideThatService = styled.div`
  padding: 50px 0;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WeProvideThatServiceLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 512px;
`;

export const OurServiceH2 = styled.h2`
  font-size: 60px;
  line-height: 80px;
  font-weight: 600;
`;

export const OurServiceText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 33px;
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

export const WeProvideThatServiceRightPart = styled.div``;

export const RightPartContent = styled.div`
  position: relative;
  margin-right: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 40px 30px;
  z-index: 10;
`;

export const RightPartBackground = styled.div`
  position: absolute;
  width: 480px;
  height: 520px;
  top: -22px;
  right: -30px;
  background-color: rgba(47, 184, 227, 0.2);
  border-radius: 20px;
  z-index: -1;
`;

const stylesForOurServiceElement = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 252px;
  border-radius: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 20px 25px -5px ${theme.colors.ourServiceBoxShadow};
  `}
`;

export const MarketingElement = styled.div`
  ${stylesForOurServiceElement}
`;

export const GraphicElement = styled.div`
  ${stylesForOurServiceElement}
`;

export const HeakingElement = styled.div`
  ${stylesForOurServiceElement}
`;

export const UIUXDesignElement = styled.div`
  ${stylesForOurServiceElement}
`;

export const MarketingElementH4 = styled.h4`
  margin-top: 20px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const MarketingElementSubtitle = styled.p`
  margin-top: 8px;
  font-size: 18px;
  line-height: 28px;
`;
