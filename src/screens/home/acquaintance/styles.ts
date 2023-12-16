import styled from "styled-components";

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
