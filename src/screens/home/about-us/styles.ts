import styled, { css } from "styled-components";

export const AboutUsSection = styled.section`
  padding: 150px 0 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AboutUsTitleH2 = styled.h2`
  font-size: 60px;
  font-weight: 600;
  line-height: 60px;
`;

export const AboutUsDescription = styled.p`
  margin-top: 15px;
  max-width: 570px;
  font-size: 18px;
  line-height: 28px;
`;

export const UIDesigner = styled.div`
  position: relative;
`;

export const People = styled.img`
  margin-left: -90px;
  max-width: 90%;
  height: auto;
`;

export const JonyScottyBlock = styled.div`
  position: absolute;
  left: 235px;
  bottom: 100px;
  max-width: 480px;
`;

export const JonnyScottyImage = styled.img`
  margin-bottom: 30px;
  width: 142px;
  height: 142px;
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
