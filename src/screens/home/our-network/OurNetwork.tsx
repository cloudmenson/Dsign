import * as Image from "assets";

import * as Styles from "./styles";
import { ourNetworkData } from "./our-network-data";

const OurNetwork = () => {
  return (
    <Styles.OurNetworkSection>
      <Styles.OurNetworkBackgroundColor />
      <Styles.OurNetworkTitleH2>
        Our network & world work details.
      </Styles.OurNetworkTitleH2>
      <Styles.OurNetworkBackgroundImage src={Image.Map} alt="Map" />

      {ourNetworkData && (
        <Styles.CountryCardWrapper>
          {ourNetworkData.map((item) => (
            <Styles.CountryCard key={item.id}>
              <Styles.FlagAndCountryName>
                <Styles.CountryFlag src={item.img} alt={item.alt} />

                <Styles.CountryName>{item.name}</Styles.CountryName>
              </Styles.FlagAndCountryName>

              <Styles.CardDescription>{item.description}</Styles.CardDescription>
            </Styles.CountryCard>
          ))}
        </Styles.CountryCardWrapper>
      )}
    </Styles.OurNetworkSection>
  );
};

export { OurNetwork };
