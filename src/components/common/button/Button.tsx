import { IButton } from "./types";
import * as Styles from "./styles";

const Button = ({
  icon,
  type,
  text,
  color,
  hover,
  border,
  margin,
  onClick,
  padding,
  buttonIcon,
  background,
  borderradius,
}: IButton) => {
  return (
    <Styles.ButtonWrapper
      hover={hover}
      border={border}
      margin={margin}
      onClick={onClick}
      padding={padding}
      background={background}
      borderradius={borderradius}
    >
      {buttonIcon ? (
        <Styles.Button type={type}>{buttonIcon}</Styles.Button>
      ) : (
        <Styles.Button type={type}>
          {icon && <Styles.IconSpan>{icon}</Styles.IconSpan>}

          <Styles.ButtonText color={color}>{text}</Styles.ButtonText>
        </Styles.Button>
      )}
    </Styles.ButtonWrapper>
  );
};
export { Button };
