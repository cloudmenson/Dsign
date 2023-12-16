import styled, { css } from "styled-components";

export const WhyWeBestSection = styled.section`
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
