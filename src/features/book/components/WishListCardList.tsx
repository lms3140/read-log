import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "../../../shared/components/ui";
import type { WishList } from "../model/book";
import { WishListCard } from "./WishListCard";

interface WishListCardListProps {
  wishList?: WishList[];
  title?: string;
  description?: string;
  emptyMessage?: string;
}

export function WishListCardList({
  wishList = [],
  title = "읽고 싶은 책",
  description = "천천히 읽을 책을 모아두는 위시리스트예요.",
  emptyMessage = "아직 담아둔 책이 없어요.",
}: WishListCardListProps) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </SectionHeader>

      {wishList.length === 0 ? (
        <p className="text-sm text-foreground-muted">{emptyMessage}</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {wishList.map((item) => (
            <li key={item.id}>
              <WishListCard wishList={item} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
