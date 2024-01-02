import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 99999;

  body {
    overflow: hidden;
  }
`;

export const PopupContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
`;

export const PopupTitle = styled.h2`
  margin-top: 24px;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input``;

export const CheckboxLabel = styled.label`
  margin-left: 6px;
  font-size: 15px;
`;

export const RememberMe = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ResetPassLink = styled.a`
  margin: 10px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const StylesForGotItButton = styled.div`
  margin-left: auto;

  button {
    font-size: 14px;
    line-height: 20px;
  }
`;
