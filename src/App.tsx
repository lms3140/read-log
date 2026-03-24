import { CardListSection } from "./features/book/components/CardListSection";
import { FormSection } from "./features/book/components/FormSection";
import { IntroSection } from "./features/book/components/IntroSection";
import { Container, Page } from "./shared/components/ui";

function App() {
  return (
    <Page>
      <Container centered>
        <IntroSection />
        <CardListSection />
        <FormSection />
      </Container>
    </Page>
  );
}

export default App;
