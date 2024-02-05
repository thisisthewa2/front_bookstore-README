import { BookDetailCardType } from "./cardType";

interface ReviewType{
  reviewId: number;
  isOwner: boolean;
  createdAt: string;
  updatedAt?: string;
  reviewTitle: string;
  reviewBookImgUrl?: string | null;
  reviewProfileImg?: string | null;
  profileName?: string;
  reviewContent: string;
  reviewRating: number;
}

interface MyReviewType {
  book: BookDetailCardType;
  review: ReviewType;
}

interface BookReviewType {
  bookId: number;
  averageRating: number;
  ratingDist: [number, number, number, number, number];
  reviewNum: number;
  reviewList: ReviewType[];
}

export type { MyReviewType, BookReviewType };
