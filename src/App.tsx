import { CardListSection } from "./features/book/components/CardListSection";
import { FormSection } from "./features/book/components/FormSection";
import { IntroSection } from "./features/book/components/IntroSection";
import { WishListSection } from "./features/book/components/WishListSection";
import { Container, Page } from "./shared/components/ui";

function App() {
  return (
    <Page>
      <Container centered>
        <IntroSection />
        <WishListSection />
        <CardListSection />
        <FormSection />
      </Container>
    </Page>
  );
}

export default App;
