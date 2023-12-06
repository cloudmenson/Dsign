import styled, { css } from "styled-components";

export const FactItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FactItemElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconSpan = styled.span`
  padding: 8px;
  border-radius: 10px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.transparentGrey};
  `}
`;

export const Execution = styled.h2`
  margin-top: 22px;
  font-weight: 600;
  font-size: 60px;
  line-height: 60px;
`;

export const Title = styled.h3`
  margin-top: 22px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 18px;
  line-height: 28px;
`;
