import styled, { css } from "styled-components";

import { IHeader } from "./types";

export const Header = styled.header<IHeader>`
  padding: 24px 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  transition: none;

  z-index: 999999;

  ${({ theme, isScrolled }) => css`
    ${isScrolled &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      justify-content: space-evenly;
      width: 100%;
      background-color: ${theme.colors.white};
      box-shadow: 0 15px 30px ${theme.colors.isFixedHeader};
      transition:
        box-shadow 0.2s linear,
        background-color 0.2s linear;
    `}
  `}
`;

export const Logo = styled.a``;

export const HiddenTitleH1 = styled.h1`
  position: absolute;
  left: -9999px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLink = styled.a`
  padding: 16px 18px;
  transition: all 0.2s;
  opacity: 0.75;

  &:hover {
    letter-spacing: 1px;
    opacity: 1;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
