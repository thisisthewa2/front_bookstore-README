interface BookOverviewType {
  book: {
    productId: number;
    title: string;
    imageUrl?: string;
    price: number;
    authors: string[];
    rank?: number;
  };
  like: {
    userLiked: boolean;
    count: number;
  };
}

export type { BookOverviewType };
