interface BookDetailCardType {
  bookId: number;
  publishedAt: string;
  orderNum: number;
  categoryList: [string, string];
  title: string;
  imageUrl?: string | null;
  price: number;
  authors?: string[] | [];
  translator?: string;
  publisher?: string;
  views: number;
  bookmarkNum: number;
  reviewNum: number;
  rating: number;
  isBookmarked: boolean;
}

export type { BookDetailCardType };
