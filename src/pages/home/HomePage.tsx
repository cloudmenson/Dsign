import * as Image from "assets";
import { Button, FactItem, Header, Slider } from "components";

import * as Styles from "./styles";

const HomePage = () => {
  return (
    <Styles.Wrapper>
      <Header />

      <Styles.Main>
        <Styles.AcquaintanceSection>
          <Styles.SolveProblemTitleH2>
            Solve problem with an integrated agency.
          </Styles.SolveProblemTitleH2>

          <Styles.TitleDescription>
            Ehya is the Instagram analytics platform teams use to stay focused
            on the goals, track engagement for report your business .
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

        <Styles.OurServiceSection>
          <FactItem />

          <Styles.WeProvideThatService>
            <Styles.WeProvideThatServiceLeftPart>
              <Styles.OurServiceH2>
                We provide that service.
              </Styles.OurServiceH2>

              <Styles.OurServiceText>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Styles.OurServiceText>

              <Styles.OurServiceLink>
                <Styles.OurServiceLinkSpan>
                  Learn more
                </Styles.OurServiceLinkSpan>

                <Image.Arrow />
              </Styles.OurServiceLink>
            </Styles.WeProvideThatServiceLeftPart>

            <Styles.WeProvideThatServiceRightPart>
              <Styles.RightPartContent>
                <Styles.RightPartBackground />

                <Styles.MarketingElement>
                  <Image.Marketing />

                  <Styles.MarketingElementH4>
                    Marketing
                  </Styles.MarketingElementH4>

                  <Styles.MarketingElementSubtitle>
                    Follow a hashtag total posts, videos
                  </Styles.MarketingElementSubtitle>
                </Styles.MarketingElement>

                <Styles.GraphicElement>
                  <Image.GraphicDesign />

                  <Styles.MarketingElementH4>
                    Graphic design
                  </Styles.MarketingElementH4>

                  <Styles.MarketingElementSubtitle>
                    Follow a hashtag total posts, videos
                  </Styles.MarketingElementSubtitle>
                </Styles.GraphicElement>

                <Styles.HeakingElement>
                  <Image.Heaking />

                  <Styles.MarketingElementH4>Heaking</Styles.MarketingElementH4>

                  <Styles.MarketingElementSubtitle>
                    Follow a hashtag total posts, videos
                  </Styles.MarketingElementSubtitle>
                </Styles.HeakingElement>

                <Styles.UIUXDesignElement>
                  <Image.UIXDesign />

                  <Styles.MarketingElementH4>
                    UI/UX Design
                  </Styles.MarketingElementH4>

                  <Styles.MarketingElementSubtitle>
                    Follow a hashtag total posts, videos
                  </Styles.MarketingElementSubtitle>
                </Styles.UIUXDesignElement>
              </Styles.RightPartContent>
            </Styles.WeProvideThatServiceRightPart>
          </Styles.WeProvideThatService>
        </Styles.OurServiceSection>

        <Styles.WhyWeBestSection>
          <Styles.WhyWeBestSectionLeftPart>
            <Styles.TabletImage src={Image.Tablet} alt="Tablet" />
          </Styles.WhyWeBestSectionLeftPart>

          <Styles.WhyWeBestSectionRightPart>
            <Styles.WhyWeBestTitleH2>Why we best?</Styles.WhyWeBestTitleH2>

            <Styles.WhyWeBestSubtitle>
              Dont waste time on search manual tasks. Let Automation do it for
              you. Simplify workflows, reduce errors, and save time.
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
                <Styles.CommunicationTitle>
                  Communication
                </Styles.CommunicationTitle>

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
      </Styles.Main>
    </Styles.Wrapper>
  );
};

export { HomePage };
