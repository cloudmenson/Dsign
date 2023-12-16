import * as Image from "assets";
import { Button, Slider } from "components";

import * as Styles from "./styles";

const Acquaintance = () => {
  return (
    <Styles.AcquaintanceSection>
      <Styles.SolveProblemTitleH2>
        Solve problem with an integrated agency.
      </Styles.SolveProblemTitleH2>

      <Styles.TitleDescription>
        Ehya is the Instagram analytics platform teams use to stay focused on
        the goals, track engagement for report your business .
      </Styles.TitleDescription>

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
