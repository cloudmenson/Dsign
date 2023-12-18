import { useState, useEffect } from "react";

import * as Image from "assets";
import { Button, Popup } from "components";

import * as Styles from "./styles";
import { navData } from "./nav-data";

const Header = () => {
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);

  const openSignInPopup = () => {
    document.body.style.overflow = "hidden";

    setSignInPopupOpen(true);
  };

  const openSignUpPopup = () => {
    document.body.style.overflow = "hidden";

    setSignUpPopupOpen(true);
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";

    setSignInPopupOpen(false);
    setSignUpPopupOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

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
    <Styles.Header isScrolled={isScrolled}>
      <Styles.Logo href="/home">
        <Image.Logo />

        <Styles.HiddenTitleH1>Dsign</Styles.HiddenTitleH1>
      </Styles.Logo>

      <Styles.HeaderNav>
        {navData.map((navItem) => (
          <Styles.NavLink key={navItem.name} href={navItem.href}>
            {navItem.name}
          </Styles.NavLink>
        ))}
      </Styles.HeaderNav>

      <Styles.ButtonsGroup>
        <Button
          padding="0"
          color="blue"
          type="button"
          text="Sign In"
          onClick={() => openSignInPopup()}
        />

        <Button
          hover="blue"
          color="blue"
          type="button"
          text="Sign Up"
          margin="0 0 0 35px"
          borderradius="circle"
          background="paleAzure"
          onClick={() => openSignUpPopup()}
        />

        {isSignInPopupOpen && (
          <Popup onClose={closePopup} isResetPassword text="Sign In" />
        )}
        {isSignUpPopupOpen && <Popup onClose={closePopup} text="Sign Up" />}
      </Styles.ButtonsGroup>
    </Styles.Header>
  );
};

export { Header };
