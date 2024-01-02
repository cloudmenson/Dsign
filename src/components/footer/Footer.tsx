import * as Image from "assets";
import { SendMail } from "components";
import { useWindowWidth } from "hooks/useWindowWidth";

import * as Styles from "./styles";

const Footer = () => {
  const size = useWindowWidth();

  return (
    <Styles.Footer>
      <SendMail />

      <Styles.FooterBackgroundColor />

      <Styles.FooterTopPart windowWidth={size}>
        <div>
          <Styles.Logo href="#">
            <Image.Logo />
          </Styles.Logo>

          <Styles.SocialLinkContainer windowWidth={size}>
            <Styles.SocialLink href="#">
              <Image.Facebook />
            </Styles.SocialLink>

            <Styles.SocialLink href="#">
              <Image.Twitter />
            </Styles.SocialLink>

            <Styles.SocialLink href="#">
              <Image.Instagram />
            </Styles.SocialLink>
          </Styles.SocialLinkContainer>
        </div>

        <Styles.FooterLinksWrapperForDirections windowWidth={size}>
          <Styles.FooterLinksContainer windowWidth={size}>
            <Styles.FooterLink href="#">Home</Styles.FooterLink>
            <Styles.FooterLink href="#">Popular</Styles.FooterLink>
            <Styles.FooterLink href="#">About</Styles.FooterLink>
            <Styles.FooterLink href="#">Contact</Styles.FooterLink>
          </Styles.FooterLinksContainer>

          <Styles.FooterLinksContainer windowWidth={size}>
            <Styles.FooterLink href="#">Help</Styles.FooterLink>
            <Styles.FooterLink href="#">Resources</Styles.FooterLink>
            <Styles.FooterLink href="#">Application</Styles.FooterLink>
            <Styles.FooterLink href="#">Team</Styles.FooterLink>
          </Styles.FooterLinksContainer>
        </Styles.FooterLinksWrapperForDirections>

        <Styles.FooterLinksContainer windowWidth={size}>
          <Styles.FooterCompanyDetails>
            <Image.Marker />

            <Styles.FooterCompanyDetailsItem>
              925 Filbert Street Pennsylvania
            </Styles.FooterCompanyDetailsItem>
          </Styles.FooterCompanyDetails>

          <Styles.FooterCompanyDetails>
            <Image.Telephone />

            <Styles.FooterCompanyDetailsItem>
              + 45 34 11 44
            </Styles.FooterCompanyDetailsItem>
          </Styles.FooterCompanyDetails>

          <Styles.FooterCompanyDetails>
            <Image.Mail />

            <Styles.FooterCompanyDetailsItem>
              info@gmail.com
            </Styles.FooterCompanyDetailsItem>
          </Styles.FooterCompanyDetails>
        </Styles.FooterLinksContainer>
      </Styles.FooterTopPart>

      <Styles.FooterBottomPart windowWidth={size}>
        <Styles.FooterTermsLink
          target="_blank"
          windowWidth={size}
          href="https://adminmart.com"
        >
          @2023 Agency. All Rights Reserved by Adminmart.com
        </Styles.FooterTermsLink>

        <Styles.StyleForFooterTermsLink>
          <Styles.FooterTermsLink windowWidth={size} href="#">
            Privacy policy
          </Styles.FooterTermsLink>

          <Styles.FooterPartition>|</Styles.FooterPartition>

          <Styles.FooterTermsLink windowWidth={size} href="#">
            Terms & conditions
          </Styles.FooterTermsLink>
        </Styles.StyleForFooterTermsLink>
      </Styles.FooterBottomPart>
    </Styles.Footer>
  );
};

export { Footer };
