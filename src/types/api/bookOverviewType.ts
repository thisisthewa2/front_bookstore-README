import { StaticImageData } from 'next/image';
import { BookData } from '@/types/api/book';

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

interface BookOverviewType2 {
  book: BookData;
  rank?: number;
}

export type { BookOverviewType, BookOverviewType2 };
