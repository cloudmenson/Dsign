import { Footer, Header } from "components";
import {
  AboutUs,
  WhyWeBest,
  OurNetwork,
  OurService,
  Acquaintance,
} from "screens";

import * as Styles from "./styles";

const HomePage = () => {
  return (
    <Styles.Wrapper>
      <Header />

      <Styles.Main>
        <Acquaintance />

        <OurService />

        <WhyWeBest />

        <OurNetwork />

        <AboutUs />
      </Styles.Main>

      <Footer />
    </Styles.Wrapper>
  );
};

export { HomePage };
