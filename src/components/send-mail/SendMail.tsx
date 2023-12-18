import * as Image from "assets";

import * as Styles from "./styles";

const SendMail = () => {
  return (
    <Styles.SendMailContainer>
      <Styles.MailImage src={Image.Post} alt="Mail" />

      <Styles.SendMailContent>
        <Styles.SendMailTitleH3>
          Sign up to our newsletter.
        </Styles.SendMailTitleH3>
      </Styles.SendMailContent>
    </Styles.SendMailContainer>
  );
};

export { SendMail };
