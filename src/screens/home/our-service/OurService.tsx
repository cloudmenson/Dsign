import { motion } from "framer-motion";

import * as Image from "assets";
import { FactItem } from "components";
import { useWindowWidth } from "hooks/useWindowWidth";

import * as Styles from "./styles";
import { ourServiceData } from "./our-service-data";

const OurService = () => {
  const size = useWindowWidth();

  return (
    <Styles.OurServiceSection>
      <FactItem />

      <Styles.WeProvideThatService windowWidth={size}>
        <Styles.WeProvideThatServiceLeftPart windowWidth={size}>
          <Styles.OurServiceH2 windowWidth={size}>
            We provide that service.
          </Styles.OurServiceH2>

          <Styles.OurServiceText windowWidth={size}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Styles.OurServiceText>

          <Styles.OurServiceLink>
            <Styles.OurServiceLinkSpan>Learn more</Styles.OurServiceLinkSpan>

            <Image.Arrow />
          </Styles.OurServiceLink>
        </Styles.WeProvideThatServiceLeftPart>

        <Styles.WeProvideThatServiceRightPart windowWidth={size}>
          <Styles.RightPartContent windowWidth={size}>
            {ourServiceData?.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                style={{
                  color: "inherit",
                  textAlign: "left",
                  fontWeight: "inherit",
                }}
              >
                <Styles.OurElement windowWidth={size}>
                  <item.image />

                  <Styles.OurElementH4 windowWidth={size}>
                    {item.title}
                  </Styles.OurElementH4>

                  <Styles.OurElementSubtitle windowWidth={size}>
                    {item.subtitle}
                  </Styles.OurElementSubtitle>
                </Styles.OurElement>
              </motion.button>
            ))}
          </Styles.RightPartContent>
        </Styles.WeProvideThatServiceRightPart>
      </Styles.WeProvideThatService>
    </Styles.OurServiceSection>
  );
};

export { OurService };
