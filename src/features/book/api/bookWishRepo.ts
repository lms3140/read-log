import { db } from "../../../shared/libs/db/db";
import type { WishList } from "../model/book";

export async function getWishLists() {
  return db.wishList.orderBy("createdAt").reverse().toArray();
}

export async function getWishListById(id: string) {
  return db.wishList.get(id);
}

export async function addWishList(wishList: WishList) {
  await db.wishList.add(wishList);
}

export async function updateWishList(wishList: WishList) {
  await db.wishList.put(wishList);
}

export async function removeWishList(id: string) {
  await db.wishList.delete(id);
}
