import { WishListCardList } from "./WishListCardList";
import { WishListForm } from "./WishListForm";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../shared/libs/db/db";

export function WishListSection() {
  const wishList = useLiveQuery(
    () => db.wishList.orderBy("createdAt").reverse().toArray(),
    [],
    [],
  );

  return (
    <>
      <WishListForm />
      <WishListCardList wishList={wishList} />
    </>
  );
}
