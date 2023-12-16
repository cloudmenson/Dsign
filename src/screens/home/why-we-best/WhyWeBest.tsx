import * as Image from "assets";

import * as Styles from "./styles";

const WhyWeBest = () => {
  return (
    <Styles.WhyWeBestSection>
      <Styles.WhyWeBestSectionLeftPart>
        <Styles.TabletImage src={Image.Tablet} alt="Tablet" />
      </Styles.WhyWeBestSectionLeftPart>

      <Styles.WhyWeBestSectionRightPart>
        <Styles.WhyWeBestTitleH2>Why we best?</Styles.WhyWeBestTitleH2>

        <Styles.WhyWeBestSubtitle>
          Dont waste time on search manual tasks. Let Automation do it for you.
          Simplify workflows, reduce errors, and save time.
        </Styles.WhyWeBestSubtitle>

        <Styles.WyWeBestQuality>
          <Styles.IconWrapper>
            <Image.Check />
          </Styles.IconWrapper>

          <Styles.WrapperForWyWeBestTitleAndSubtitle>
            <Styles.QualityTitle>Quality</Styles.QualityTitle>

            <Styles.WyWeBestElementsSubtitle>
              Follow a hashtag growth total posts, videos and images.more
              revitions
            </Styles.WyWeBestElementsSubtitle>
          </Styles.WrapperForWyWeBestTitleAndSubtitle>
        </Styles.WyWeBestQuality>

        <Styles.WyWeBestCommunication>
          <Styles.IconWrapper>
            <Image.Check />
          </Styles.IconWrapper>

          <Styles.WrapperForWyWeBestTitleAndSubtitle>
            <Styles.CommunicationTitle>Communication</Styles.CommunicationTitle>

            <Styles.WyWeBestElementsSubtitle>
              Follow a hashtag growth total posts, videos and images.more
              revitions
            </Styles.WyWeBestElementsSubtitle>
          </Styles.WrapperForWyWeBestTitleAndSubtitle>
        </Styles.WyWeBestCommunication>

        <Styles.WyWeBestReliability>
          <Styles.IconWrapper>
            <Image.Check />
          </Styles.IconWrapper>

          <Styles.WrapperForWyWeBestTitleAndSubtitle>
            <Styles.ReliabilityTitle>Reliability</Styles.ReliabilityTitle>

            <Styles.WyWeBestElementsSubtitle>
              Follow a hashtag growth total posts, videos and images.more
              revitions
            </Styles.WyWeBestElementsSubtitle>
          </Styles.WrapperForWyWeBestTitleAndSubtitle>
        </Styles.WyWeBestReliability>
      </Styles.WhyWeBestSectionRightPart>
    </Styles.WhyWeBestSection>
  );
};

export { WhyWeBest };
