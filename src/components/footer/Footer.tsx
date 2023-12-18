import { SendMail } from "components";
import * as Image from "assets";

import * as Styles from "./styles";

const Footer = () => {
  return (
    <Styles.Footer>
      <SendMail />

      <Styles.FooterBackgroundColor />

      <Styles.FooterTopPart>
        <div>
          <Styles.Logo href="#">
            <Image.Logo />
          </Styles.Logo>

          <Styles.SocialLinkContainer>
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

        <Styles.FooterLinksContainer>
          <Styles.FooterLink href="#">Home</Styles.FooterLink>
          <Styles.FooterLink href="#">Popular</Styles.FooterLink>
          <Styles.FooterLink href="#">About</Styles.FooterLink>
          <Styles.FooterLink href="#">Contact</Styles.FooterLink>
        </Styles.FooterLinksContainer>

        <Styles.FooterLinksContainer>
          <Styles.FooterLink href="#">Help</Styles.FooterLink>
          <Styles.FooterLink href="#">Resources</Styles.FooterLink>
          <Styles.FooterLink href="#">Application</Styles.FooterLink>
          <Styles.FooterLink href="#">Team</Styles.FooterLink>
        </Styles.FooterLinksContainer>

        <Styles.FooterLinksContainer>
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

      <Styles.FooterBottomPart>
        <Styles.FooterTermsLink href="https://adminmart.com" target="_blank">
          @2023 Agency. All Rights Reserved by Adminmart.com
        </Styles.FooterTermsLink>

        <Styles.StyleForFooterTermsLink>
          <Styles.FooterTermsLink href="#">
            Privacy policy
          </Styles.FooterTermsLink>

          <Styles.FooterPartition>|</Styles.FooterPartition>

          <Styles.FooterTermsLink href="#">
            Terms & conditions
          </Styles.FooterTermsLink>
        </Styles.StyleForFooterTermsLink>
      </Styles.FooterBottomPart>
    </Styles.Footer>
  );
};

export { Footer };
