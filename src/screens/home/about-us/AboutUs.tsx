import * as Image from "assets";

import * as Styles from "./styles";

const AboutUs = () => {
  return (
    <Styles.AboutUsSection>
      <Styles.AboutUsTitleH2>What say clients about us.</Styles.AboutUsTitleH2>

      <Styles.AboutUsDescription>
        Event madness gathering innoies,& tech enthusiasts in Speced. do more
        informations.
      </Styles.AboutUsDescription>

      <Styles.UIDesigner>
        <Styles.People src={Image.People} alt="People" />

        <Styles.JonyScottyBlock>
          <Styles.JonnyScottyImage src={Image.Man} alt="Jony Scotty" />

          <Styles.JonyScottyBackground>
            <Styles.JonyScottySubtitle>
              Build your financial literacy within a transparent community.
              Follow other investors, share people from different professional
              backgrounds, and never be alone.
            </Styles.JonyScottySubtitle>

            <Styles.JonyScottyTitleH3>JonyScotty</Styles.JonyScottyTitleH3>

            <Styles.JonyScottyDesignerH4>
              UI Designer
            </Styles.JonyScottyDesignerH4>
          </Styles.JonyScottyBackground>
        </Styles.JonyScottyBlock>
      </Styles.UIDesigner>
    </Styles.AboutUsSection>
  );
};

export { AboutUs };
