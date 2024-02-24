export type CartItem = {
  basketId: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  count: number;
  authors: string[];
};

export type PayMentAtom = {
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  authors: string[];
  count: number;
};
