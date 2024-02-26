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
  orderBookId?: number;
  basketId?: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  authors: string[];
  count: number;
  quantity?: number;
};
