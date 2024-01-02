import { ReactNode } from "react";

type ButtonBackground = "blue" | "paleAzure" | undefined;
type ButtonBorderRadius = "circle" | "square" | undefined;
type ButtonColors = "white" | "blue" | "black" | undefined;
type ButtonTypes = "button" | "submit" | "reset" | undefined;

export interface IButton {
  text?: string;
  isHover?: string;
  isMargin?: string;
  isIcon?: ReactNode;
  isPadding?: string;
  type?: ButtonTypes;
  onClick?: () => void;
  color?: ButtonColors;
  isBackground?: ButtonBackground;
  isBorder?: "paleAzure" | undefined;
  isBorderRadius?: ButtonBorderRadius;
}
