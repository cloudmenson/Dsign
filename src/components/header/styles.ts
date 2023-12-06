import styled from "styled-components";

export const Header = styled.header`
  padding: 24px 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
