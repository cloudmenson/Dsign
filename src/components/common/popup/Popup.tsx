import { useEffect } from "react";

import * as Image from "assets";
import { Button, Form } from "components";

import { IPopup } from "./types";
import * as Styles from "./styles";

const Popup = ({ onClose, isResetPassword, text }: IPopup) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = (e: KeyboardEvent) => {
      handleKeyDown(e);
    };

    window.addEventListener("keydown", handleKeyDownEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDownEvent);
    };
  }, []);

  return (
    <Styles.Popup onClick={handleOverlayClick}>
      <Styles.PopupContent>
        <Image.Logo />

        <Styles.PopupTitle>Sign in to your account</Styles.PopupTitle>

        <Form />

        <Styles.CheckBoxAndResetPass>
          <Styles.CheckboxWrapper>
            <Styles.Checkbox type="checkbox" id="checkbox" />
            <Styles.CheckboxLabel htmlFor="checkbox">
              Remember me
            </Styles.CheckboxLabel>
          </Styles.CheckboxWrapper>

          {isResetPassword && (
            <Styles.ResetPassLink>Forgot your password?</Styles.ResetPassLink>
          )}
        </Styles.CheckBoxAndResetPass>

        <Button
          text={text}
          type="submit"
          color="white"
          background="blue"
          padding="8px 16px"
          margin="24px 0 0 0"
          icon={<Image.Lock />}
          borderRadius="square"
        />

        <Styles.StylesForGotItButton>
          <Button
            padding="0"
            type="submit"
            color="black"
            onClick={onClose}
            margin="60px 0 0 0"
            text="Got it, thanks!"
          />
        </Styles.StylesForGotItButton>
      </Styles.PopupContent>
    </Styles.Popup>
  );
};

export { Popup };
