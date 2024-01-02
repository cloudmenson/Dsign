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

  return (
    <Styles.Popup onClick={handleOverlayClick}>
      <Styles.PopupContent>
        <Image.Logo />

        <Styles.PopupTitle>Sign in to your account</Styles.PopupTitle>

        <Form />

        <Styles.RememberMe>
          <Styles.CheckboxWrapper>
            <Styles.Checkbox type="checkbox" id="checkbox" />

            <Styles.CheckboxLabel htmlFor="checkbox">
              Remember me
            </Styles.CheckboxLabel>
          </Styles.CheckboxWrapper>
        </Styles.RememberMe>

        <Button
          text={text}
          type="submit"
          color="white"
          isBackground="blue"
          isPadding="8px 16px"
          isMargin="24px 0 0 0"
          isIcon={<Image.Lock />}
          isBorderRadius="square"
        />

        {isResetPassword && (
          <Styles.ResetPassLink>Forgot your password?</Styles.ResetPassLink>
        )}

        <Styles.StylesForGotItButton>
          <Button
            isPadding="0"
            type="submit"
            color="black"
            onClick={onClose}
            isMargin="60px 0 0 0"
            text="Got it, thanks!"
          />
        </Styles.StylesForGotItButton>
      </Styles.PopupContent>
    </Styles.Popup>
  );
};

export { Popup };
