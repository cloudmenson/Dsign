import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useWindowWidth } from "hooks/useWindowWidth";

import * as Styles from "./styles";
import { factItemData } from "./fact-item-data";

const FactItem = () => {
  const size = useWindowWidth();
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        transition: {
          duration: 3,
          repeatDelay: 3,
        },
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <Styles.FactItemContainer windowWidth={size}>
      {factItemData.map((item) => (
        <Styles.FactItemElement key={item.id}>
          <motion.div animate={controls}>
            <Styles.IconSpan>
              <item.icon />
            </Styles.IconSpan>
          </motion.div>

          <Styles.Execution windowWidth={size}>
            {item.execution}
          </Styles.Execution>

          <Styles.Title windowWidth={size}>{item.title}</Styles.Title>

          <Styles.Subtitle windowWidth={size}>{item.subtitle}</Styles.Subtitle>
        </Styles.FactItemElement>
      ))}
    </Styles.FactItemContainer>
  );
};

export { FactItem };
