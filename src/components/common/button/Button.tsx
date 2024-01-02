import { IButton } from "./types";
import * as Styles from "./styles";

const Button = ({
  text,
  type,
  color,
  isIcon,
  isHover,
  onClick,
  isBorder,
  isMargin,
  isPadding,
  isBackground,
  isBorderRadius,
}: IButton) => {
  return (
    <Styles.ButtonWrapper
      isHover={isHover}
      onClick={onClick}
      isBorder={isBorder}
      isMargin={isMargin}
      isPadding={isPadding}
      isBackground={isBackground}
      isBorderRadius={isBorderRadius}
    >
      <Styles.Button type={type}>
        {isIcon && <Styles.IconSpan>{isIcon}</Styles.IconSpan>}

        <Styles.ButtonText color={color}>{text}</Styles.ButtonText>
      </Styles.Button>
    </Styles.ButtonWrapper>
  );
};
export { Button };
