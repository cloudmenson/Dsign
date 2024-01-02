export const titleVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 3,
      type: "spring",
      stiffness: 300,
    },
  },
};

export const subtitleVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.6,
      duration: 3,
      type: "spring",
      stiffness: 500,
    },
  },
};

export const buttonVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2.4,
      duration: 1,
      type: "spring",
    },
  },
};
