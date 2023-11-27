import { IButton } from "./types";
import * as Styles from "./styles";

const Button = ({ icon, type, text, background }: IButton) => {
  return (
    <Styles.ButtonWrapper background={background}>
      {icon ? (
        <Styles.Button type={type}>{icon}</Styles.Button>
      ) : (
        <Styles.Button type={type}>{text}</Styles.Button>
      )}
    </Styles.ButtonWrapper>
  );
};
export { Button };
