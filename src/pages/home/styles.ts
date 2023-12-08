import styled, { css } from "styled-components";

import * as Image from "assets";

export const Wrapper = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1280px;
`;

export const Main = styled.main`
  padding-top: 50px;
  background-image: url(${Image.HeaderBackground});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`;

export const AcquaintanceSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparentGrey};
`;

export const SolveProblemTitleH2 = styled.h2`
  max-width: 1000px;
  font-weight: 600;
  font-size: 72px;
  line-height: 96px;
`;

export const TitleDescription = styled.p`
  margin-top: 24px;
  max-width: 800px;
  font-size: 18px;
  line-height: 32px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WorkupSiteImage = styled.img`
  margin-top: 10px;
  max-width: 100%;
  height: auto;
  margin-left: -68px;
`;

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

export const WhyWeBestSection = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WhyWeBestSectionLeftPart = styled.div``;

export const TabletImage = styled.img`
  margin-left: -150px;
  max-width: 100%;
  height: auto;
`;

export const WhyWeBestSectionRightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WhyWeBestTitleH2 = styled.h2`
  font-size: 48px;
  line-height: 48px;
  font-weight: 600;
`;

export const WhyWeBestSubtitle = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 600px;
  font-size: 18px;
  line-height: 23px;
`;

const stylesForWyWeBestElement = css`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const stylesForWyWeBestTitle = css`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const WyWeBestQuality = styled.div`
  ${stylesForWyWeBestElement};
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
  width: 550px;
`;

export const QualityTitle = styled.h3`
  ${stylesForWyWeBestTitle};
`;

export const WyWeBestCommunication = styled.div`
  ${stylesForWyWeBestElement};
`;

export const CommunicationTitle = styled.h3`
  ${stylesForWyWeBestTitle};
`;

export const WyWeBestReliability = styled.div`
  ${stylesForWyWeBestElement};
`;

export const ReliabilityTitle = styled.h3`
  ${stylesForWyWeBestTitle};
`;

export const WyWeBestElementsSubtitle = styled.p`
  margin-top: 5px;
  font-size: 18px;
  line-height: 25px;
`;

export const OurNetworkSection = styled.section`
  margin-top: 200px 0 0 0;
  background-color: ${({ theme }) => theme.colors.ourNetworkBackground};
`;
