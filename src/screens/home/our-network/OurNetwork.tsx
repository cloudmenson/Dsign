import { motion } from "framer-motion";
import { useWindowWidth } from "hooks/useWindowWidth";

import * as Image from "assets";

import * as Styles from "./styles";
import { ourNetworkData } from "./our-network-data";

const OurNetwork = () => {
  const size = useWindowWidth();

  return (
    <Styles.OurNetworkSection>
      <Styles.OurNetworkBackgroundColor />

      <Styles.OurNetworkTitleH2 windowWidth={size}>
        Our network & world work details.
      </Styles.OurNetworkTitleH2>
      <Styles.OurNetworkBackgroundImage src={Image.Map} alt="Map" />

      {ourNetworkData && (
        <Styles.CountryCardWrapper windowWidth={size}>
          {ourNetworkData.map((item) => (
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
              <Styles.CountryCard>
                <Styles.FlagAndCountryName>
                  <Styles.CountryFlag src={item.img} alt={item.alt} />

                  <Styles.CountryName>{item.name}</Styles.CountryName>
                </Styles.FlagAndCountryName>

                <Styles.CardDescription windowWidth={size}>
                  {item.description}
                </Styles.CardDescription>
              </Styles.CountryCard>
            </motion.button>
          ))}
        </Styles.CountryCardWrapper>
      )}
    </Styles.OurNetworkSection>
  );
};

export { OurNetwork };
