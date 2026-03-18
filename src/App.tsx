import { CardListSection } from "./features/book/components/CardListSection";
import { IntroSection } from "./features/book/components/IntroSection";
import { Container, Page, Section } from "./shared/components/ui";
import { db } from "./shared/libs/db/db";

function App() {
  const handleClick = async () => {
    await db.books.add({
      id: crypto.randomUUID(),
      title: "데미안",
      author: "헤르만 헤세",
      genre: "소설",
      tags: ["성장", "철학적"],
      status: "DONE",
      rating: 5,
      memo: "좋았음",
      createdAt: new Date().toISOString(),
      finishedAt: new Date().toISOString(),
    });
  };
  return (
    <Page>
      <Container centered>
        <IntroSection />
        <CardListSection />
      </Container>
    </Page>
  );
}

export default App;
