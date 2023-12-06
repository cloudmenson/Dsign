import * as Styles from "./styles";
import { factItemData } from "./fact-item-data";

const FactItem = () => {
  return (
    <Styles.FactItemContainer>
      {factItemData.map((item) => (
        <Styles.FactItemElement key={item.id}>
          <Styles.IconSpan>
            <item.icon />
          </Styles.IconSpan>

          <Styles.Execution>{item.execution}</Styles.Execution>

          <Styles.Title>{item.title}</Styles.Title>

          <Styles.Subtitle>{item.subtitle}</Styles.Subtitle>
        </Styles.FactItemElement>
      ))}
    </Styles.FactItemContainer>
  );
};

export { FactItem };
