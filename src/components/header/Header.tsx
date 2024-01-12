import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import * as Image from "assets";
import { useWindowWidth } from "hooks/useWindowWidth";
import { Button, Popup, Responsive } from "components";

import * as Styles from "./styles";
import { navData } from "./nav-data";

const Header = () => {
  const PopupTypes = {
    SIGN_IN: "sign-in",
    SIGN_UP: "sign-up",
  };

  const size = useWindowWidth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActivePopup, setIsActivePopup] = useState(null);

  const openPopup = (popupType: any) => {
    document.body.style.overflow = "hidden";
    setIsActivePopup(popupType);
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";
    setIsActivePopup(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Styles.Header windowWidth={size} isScrolled={isScrolled}>
      <Styles.Logo href="/">
        <Image.Logo />

        <Styles.HiddenTitleH1>Dsign</Styles.HiddenTitleH1>
      </Styles.Logo>

      <Responsive.NotDesktop>
        <Styles.BurgerMenu
          right
          width={"200px"}
          customCrossIcon={false}
          customBurgerIcon={<FaBars size={25} />}
          className="burger-menu custom-close-button"
        >
          <Styles.HeaderNav windowWidth={size}>
            {navData.map((navItem) => (
              <Styles.NavLink key={navItem.name} href={navItem.href}>
                {navItem.name}
              </Styles.NavLink>
            ))}
          </Styles.HeaderNav>

          <Styles.ButtonsGroup>
            <Button
              color="blue"
              type="button"
              isMargin="4px"
              text="Sign In"
              isBorder="paleAzure"
              isPadding="8px 16px"
              isBorderRadius="square"
              onClick={() => openPopup(PopupTypes.SIGN_IN)}
            />

            <Button
              color="blue"
              type="button"
              isHover="blue"
              isMargin="4px"
              text="Sign Up"
              isPadding="8px 16px"
              isBorderRadius="square"
              isBackground="paleAzure"
              onClick={() => openPopup(PopupTypes.SIGN_UP)}
            />
          </Styles.ButtonsGroup>
        </Styles.BurgerMenu>
      </Responsive.NotDesktop>

      <Responsive.Desktop>
        <Styles.HeaderNav windowWidth={size}>
          {navData.map((navItem) => (
            <Styles.NavLink key={navItem.name} href={navItem.href}>
              {navItem.name}
            </Styles.NavLink>
          ))}
        </Styles.HeaderNav>

        <Styles.ButtonsGroup>
          <Button
            color="blue"
            isPadding="0"
            type="button"
            text="Sign In"
            onClick={() => openPopup(PopupTypes.SIGN_IN)}
          />

          <Button
            color="blue"
            type="button"
            isHover="blue"
            text="Sign Up"
            isMargin="0 0 0 35px"
            isBorderRadius="circle"
            isBackground="paleAzure"
            onClick={() => openPopup(PopupTypes.SIGN_UP)}
          />
        </Styles.ButtonsGroup>
      </Responsive.Desktop>

      {isActivePopup === PopupTypes.SIGN_IN && (
        <Popup onClose={closePopup} isResetPassword text="Sign In" />
      )}

      {isActivePopup === PopupTypes.SIGN_UP && (
        <Popup onClose={closePopup} text="Sign Up" />
      )}
    </Styles.Header>
  );
};

export { Header };
