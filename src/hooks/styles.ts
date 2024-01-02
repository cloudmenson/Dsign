import { useMediaQuery } from "react-responsive";

const mobileMaxWidth = 767;
const tabletMaxWidth = 1023;

export const IsMobile = () => useMediaQuery({ maxWidth: mobileMaxWidth });

export const IsTablet = () =>
  useMediaQuery({
    minWidth: mobileMaxWidth + 1,
    maxWidth: tabletMaxWidth,
  });

export const IsDesktop = () => useMediaQuery({ minWidth: tabletMaxWidth + 1 });
