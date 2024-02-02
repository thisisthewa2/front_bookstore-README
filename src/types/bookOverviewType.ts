import { StaticImageData } from 'next/image';

interface BookOverviewType {
  book: {
    bookId: number;
    bookTitle: string;
    bookImgUrl?: string | StaticImageData;
    price: number;
    authors: string[];
    rank?: number;
    publisher: string;
    averageRating: number;
    reviewCount: number;
    genre: string;
    categories: string[];
    publishedDate: string;
  };
  like: {
    userLiked: boolean;
    count: number;
  };
}

export type { BookOverviewType };
