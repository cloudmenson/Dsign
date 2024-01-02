import styled, { css } from "styled-components";

import { IWindowWidth } from "./types";

export const SendMailContainer = styled.div<IWindowWidth>`
  position: absolute;
  left: 50%;
  top: -7rem;
  transform: translate(-50%, -7rem);
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;

  ${({ windowWidth }) => css`
    ${windowWidth < 769 &&
    css`
      top: -4rem;
      transform: translate(-50%, -4rem);
      max-width: 715px;
    `}
  `}
`;

export const MailImage = styled.img<IWindowWidth>`
  padding-top: 82px;
  max-width: 580px;
  height: auto;

  ${({ windowWidth }) => css`
    ${windowWidth < 1025 &&
    css`
      max-width: 440px;
    `}

    ${windowWidth < 1024 &&
    css`
      display: none;
    `}
  `}
`;

export const SendMailContent = styled.div<IWindowWidth>`
  padding: 40px;
  display: flex;
  flex-direction: column;

  ${({ windowWidth }) => css`
    ${windowWidth < 426 &&
    css`
      padding: 30px;
    `}
  `}
`;

export const SendMailTitleH3 = styled.h3<IWindowWidth>`
  font-size: 48px;
  line-height: 48px;

  ${({ windowWidth, theme }) => css`
    color: ${theme.colors.white};

    ${windowWidth < 426 &&
    css`
      font-size: 36px;
      line-height: 42px;
    `}
  `}
`;

export const SendMailSubtitle = styled.p<IWindowWidth>`
  margin-top: 15px;
  max-width: 540px;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.85;

  ${({ windowWidth, theme }) => css`
    color: ${theme.colors.paleAzure};

    ${windowWidth < 426 &&
    css`
      font-size: 14px;
      line-height: 20px;
    `}
  `}
`;

export const SendMailInputContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 0;
`;

export const SendMailInput = styled.input`
  padding: 15px;
  width: 100%;
  border-radius: 10px 0 0 10px;
  border: none;
`;

export const SendEmailButton = styled.button`
  padding: 16px 16px 16px 16px;
  display: flex;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  background-color: ${({ theme }) => theme.colors.midnightBlue};

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }
`;
