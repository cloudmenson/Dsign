import * as Image from "assets";

import * as Styles from "./styles";
import { navData } from "./navData";

const Header = () => {
  return (
    <Styles.Header>
      <Styles.Logo href="/home">
        <Image.Logo />
      </Styles.Logo>

      <Styles.HeaderNav>
        {navData.map((navItem) => (
          <Styles.NavLink key={navItem.name} href={navItem.href}>
            {navItem.name}
          </Styles.NavLink>
        ))}
      </Styles.HeaderNav>
    </Styles.Header>
  );
};

export { Header };
