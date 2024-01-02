import * as Image from "assets";
import { useWindowWidth } from "hooks/useWindowWidth";

import * as Styles from "./styles";

const SendMail = () => {
  const size = useWindowWidth();

  return (
    <Styles.SendMailContainer windowWidth={size}>
      <Styles.MailImage windowWidth={size} src={Image.Post} alt="Mail" />

      <Styles.SendMailContent windowWidth={size}>
        <Styles.SendMailTitleH3 windowWidth={size}>
          Sign up to our newsletter.
        </Styles.SendMailTitleH3>

        <Styles.SendMailSubtitle windowWidth={size}>
          Craven omni memoria patriae zombieland clairvius narcisse religionis
          sunt diri undead historiarum.
        </Styles.SendMailSubtitle>

        <Styles.SendMailInputContainer>
          <Styles.SendMailInput placeholder="@enter email-adress" />

          <Styles.SendEmailButton>
            <Image.Plane />
          </Styles.SendEmailButton>
        </Styles.SendMailInputContainer>
      </Styles.SendMailContent>
    </Styles.SendMailContainer>
  );
};

export { SendMail };
