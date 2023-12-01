import { useState } from "react";

import * as Image from "assets";
import { Button, Popup } from "components";

import * as Styles from "./styles";
import { navData } from "./navData";

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

  return (
    <Styles.Header>
      <Styles.Logo href="/home">
        <Image.Logo />
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
          hover="true"
          color="blue"
          type="button"
          text="Sign Up"
          margin="0 0 0 35px"
          borderRadius="circle"
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
