import styled from "styled-components";

export const Form = styled.form`
  margin-top: 24px;
  width: 100%;

  input:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
  }

  input:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
`;
