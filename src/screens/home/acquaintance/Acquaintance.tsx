import { motion } from "framer-motion";

import * as Image from "assets";
import { Button, Slider } from "components";

import * as Styles from "./styles";

const Acquaintance = () => {
  const titleVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        delay: 0.6,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const subtitleVariants = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
        delay: 1.4,
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <Styles.AcquaintanceSection>
      <motion.div initial="initial" animate="animate" variants={titleVariants}>
        <Styles.SolveProblemTitleH2>
          Solve problem with an integrated agency.
        </Styles.SolveProblemTitleH2>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={subtitleVariants}
      >
        <Styles.TitleDescription>
          Ehya is the Instagram analytics platform teams use to stay focused on
          the goals, track engagement for report your business .
        </Styles.TitleDescription>
      </motion.div>

      <Styles.ButtonsContainer>
        <Button
          color="white"
          background="blue"
          padding="22px 33px"
          margin="0 20px 0 0"
          borderradius="circle"
          text="See our portfolio"
        />

        <Button
          color="blue"
          hover="blue"
          text="More info"
          border="paleAzure"
          borderradius="circle"
        />
      </Styles.ButtonsContainer>

      <Styles.WorkupSiteImage src={Image.WorkupSite} />

      <Slider />
    </Styles.AcquaintanceSection>
  );
};

export { Acquaintance };
