import * as Image from "assets";
import { FactItem } from "components";

import * as Styles from "./styles";

const OurService = () => {
  return (
    <Styles.OurServiceSection>
      <FactItem />

      <Styles.WeProvideThatService>
        <Styles.WeProvideThatServiceLeftPart>
          <Styles.OurServiceH2>We provide that service.</Styles.OurServiceH2>

          <Styles.OurServiceText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Styles.OurServiceText>

          <Styles.OurServiceLink>
            <Styles.OurServiceLinkSpan>Learn more</Styles.OurServiceLinkSpan>

            <Image.Arrow />
          </Styles.OurServiceLink>
        </Styles.WeProvideThatServiceLeftPart>

        <Styles.WeProvideThatServiceRightPart>
          <Styles.RightPartContent>
            <Styles.RightPartBackground />

            <Styles.MarketingElement>
              <Image.Marketing />

              <Styles.MarketingElementH4>Marketing</Styles.MarketingElementH4>

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
  );
};

export { OurService };