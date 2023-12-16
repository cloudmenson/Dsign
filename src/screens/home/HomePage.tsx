import { Header } from "components";
import { Acquaintance, OurNetwork, OurService, WhyWeBest } from "screens";

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
      </Styles.Main>
    </Styles.Wrapper>
  );
};

export { HomePage };
