import { StaticImageData } from 'next/image';

interface BookOverviewType {
  book: {
    productId: number;
    title: string;
    imageUrl?: string | StaticImageData;
    price: number;
    authors: string[];
    rank?: number;
    publisher: string;
    rating: number;
    issueDate?: number;
  };
  like: {
    userLiked: boolean;
    count: number;
  };
}

export type { BookOverviewType };
