import styled from "styled-components";

export const SendMailContainer = styled.div`
  position: absolute;
  left: 0;
  top: -12rem;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
`;

export const MailImage = styled.img`
  max-width: 580px;
  height: auto;
`;

export const SendMailContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const SendMailTitleH3 = styled.h3`
  font-size: 48px;
  line-height: 48px;
`;
