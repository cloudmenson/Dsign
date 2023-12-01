import { ReactNode } from "react";

type ButtonBackground = "blue" | "paleAzure";
type ButtonBorderRadius = "circle" | "square" | undefined;
type ButtonColors = "white" | "blue" | "black" | undefined;
type ButtonTypes = "button" | "submit" | "reset" | undefined;

export interface IButton {
  text?: string;
  hover?: string;
  margin?: string;
  icon?: ReactNode;
  padding?: string;
  type?: ButtonTypes;
  onClick?: () => void;
  color?: ButtonColors;
  buttonIcon?: ReactNode;
  background?: ButtonBackground;
  border?: "paleAzure" | undefined;
  borderRadius?: ButtonBorderRadius;
}
