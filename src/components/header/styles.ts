import styled from "styled-components";

export const Header = styled.header`
  padding: 24px 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2000px;
`;

export const Logo = styled.a``;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLink = styled.a`
  padding: 16px 12px;
  transition: all 0.2s;
  opacity: 0.75;

  &:hover {
    letter-spacing: 1px;
    opacity: 1;
  }
`;
