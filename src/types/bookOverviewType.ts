import { BookData } from './api/book';

interface BookOverviewType {
  book: BookData;
  like?: {
    userLiked: boolean;
    count: number;
  };
  rank?: number;
}

export type { BookOverviewType };
