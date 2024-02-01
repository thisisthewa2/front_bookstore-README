interface TodayBestBookCardType {
  productId: number;
  bookImg?: string | null;
  title: string;
  author: string[] | [];
  rating: number;
  genre: string;
  price: number;
}

export type { TodayBestBookCardType };
