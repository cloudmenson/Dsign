import styled, { css } from "styled-components";
import { slide as Menu } from "react-burger-menu";

import { IHeader, IWindowsWidth } from "./types";

export const Header = styled.header<IHeader>`
  padding: 24px 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: none;
  z-index: 999999;

  ${({ theme, isScrolled, windowWidth }) => css`
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

    ${windowWidth < 1058 &&
    css`
      padding: 24px 10px;
      justify-content: space-between;
    `}

    .burger-menu {
      top: 6rem;
      background: ${theme.colors.white};
      box-shadow:
        0 20px 25px -5px ${theme.colors.ourServiceBoxShadow},
        0 8px 10px -6px ${theme.colors.ourServiceBoxShadow};
    }

    .bm-item-list {
      padding: 25px 5px;
    }

    .bm-overlay {
      top: 7rem;
      left: 0;
    }

    .bm-burger-button {
      position: relative;

      button {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 25px !important;
        height: 25px !important;
      }
    }
  `}
`;

export const Logo = styled.a``;

export const HiddenTitleH1 = styled.h1`
  position: absolute;
  left: -9999px;
`;

export const BurgerMenu = styled(Menu)`
  position: relative;
`;

export const FaTimesContainer = styled.div`
  margin-top: 10px;
`;

export const HeaderNav = styled.nav<IWindowsWidth>`
  display: flex !important;
  flex-direction: row;
  align-items: center;

  ${({ windowWidth }) => css`
    ${windowWidth < 1024 &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
  `}
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
  display: flex !important;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      flex-direction: row;
    `}
  `}
`;
