import { useWindowWidth } from "hooks/useWindowWidth";

import * as Image from "assets";

import * as Styles from "./styles";
import { whyWeBestData } from "./wy-we-best-data";

const WhyWeBest = () => {
  const size = useWindowWidth();

  return (
    <Styles.WhyWeBestSection windowWidth={size}>
      <Styles.WhyWeBestSectionLeftPart windowWidth={size}>
        <Styles.TabletImage
          alt="Tablet"
          windowWidth={size}
          src={Image.Tablet}
        />
      </Styles.WhyWeBestSectionLeftPart>

      <Styles.WhyWeBestSectionRightPart>
        <Styles.WhyWeBestTitleH2 windowWidth={size}>
          Why we best?
        </Styles.WhyWeBestTitleH2>

        <Styles.WhyWeBestSubtitle windowWidth={size}>
          Dont waste time on search manual tasks. Let Automation do it for you.
          Simplify workflows, reduce errors, and save time.
        </Styles.WhyWeBestSubtitle>

        {whyWeBestData && (
          <Styles.WhyWeBestElementContainer>
            {whyWeBestData.map((item) => (
              <Styles.WhyWeBestElementWrapper key={item.id}>
                <Styles.IconWrapper>
                  <item.image />
                </Styles.IconWrapper>

                <Styles.WrapperForWyWeBestTitleAndSubtitle>
                  <Styles.WyWeBestElementTitle>
                    {item.title}
                  </Styles.WyWeBestElementTitle>

                  <Styles.WyWeBestElementsSubtitle windowWidth={size}>
                    {item.subtitle}
                  </Styles.WyWeBestElementsSubtitle>
                </Styles.WrapperForWyWeBestTitleAndSubtitle>
              </Styles.WhyWeBestElementWrapper>
            ))}
          </Styles.WhyWeBestElementContainer>
        )}
      </Styles.WhyWeBestSectionRightPart>
    </Styles.WhyWeBestSection>
  );
};

export { WhyWeBest };
