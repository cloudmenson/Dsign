import { useWindowWidth } from "hooks/useWindowWidth";

import * as Image from "assets";

import * as Styles from "./styles";

const AboutUs = () => {
  const size = useWindowWidth();

  return (
    <Styles.AboutUsSection windowWidth={size}>
      <Styles.AboutUsTitleH2 windowWidth={size}>
        What say clients about us.
      </Styles.AboutUsTitleH2>

      <Styles.AboutUsDescription windowWidth={size}>
        Event madness gathering innoies,& tech enthusiasts in Speced. do more
        informations.
      </Styles.AboutUsDescription>

      <Styles.UIDesigner>
        <Styles.People windowWidth={size} src={Image.People} alt="People" />

        <Styles.JonyScottyBlock windowWidth={size}>
          <Styles.JonnyScottyImage
            src={Image.Man}
            alt="Jony Scotty"
            windowWidth={size}
          />

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
