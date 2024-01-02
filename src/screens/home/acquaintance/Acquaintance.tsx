import { motion } from "framer-motion";

import * as Image from "assets";
import { Button, Slider } from "components";
import { useWindowWidth } from "hooks/useWindowWidth";

import * as Styles from "./styles";
import {
  titleVariants,
  buttonVariants,
  subtitleVariants,
} from "./motion-config";

const Acquaintance = () => {
  const size = useWindowWidth();

  return (
    <Styles.AcquaintanceSection>
      <motion.div initial="initial" animate="animate" variants={titleVariants}>
        <Styles.SolveProblemTitleH2 windowWidth={size}>
          Solve problem with an integrated agency.
        </Styles.SolveProblemTitleH2>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={subtitleVariants}
      >
        <Styles.TitleDescription windowWidth={size}>
          Ehya is the Instagram analytics platform teams use to stay focused on
          the goals, track engagement for report your business.
        </Styles.TitleDescription>
      </motion.div>

      <Styles.ButtonsContainer windowWidth={size}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <Button
            color="white"
            isBackground="blue"
            isPadding="22px 33px"
            isBorderRadius="circle"
            text="See our portfolio"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <Button
            color="blue"
            isHover="blue"
            text="More info"
            isBorder="paleAzure"
            isBorderRadius="circle"
          />
        </motion.div>
      </Styles.ButtonsContainer>

      <Styles.WorkupSiteImageContainer windowWidth={size}>
        <Styles.WorkupSiteImage windowWidth={size} src={Image.WorkupSite} />
      </Styles.WorkupSiteImageContainer>

      <Slider />
    </Styles.AcquaintanceSection>
  );
};

export { Acquaintance };
