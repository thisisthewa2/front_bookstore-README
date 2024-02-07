import { BookDetailCardType } from './cardType';

/** 상세페이지/리뷰컴포넌트의 props 타입 */
interface ReviewType{
  reviewId: number;
  isOwner: boolean;
  createdAt: string;
  updatedAt?: string;
  reviewBookImgUrl?: string | null;
  reviewProfileImg?: string | null;
  userNickname?: string;
  reviewContent: string;
  reviewRating: number;
}

/** 마이페이지/리뷰컴포넌트의 props 타입 */
interface MyReviewType {
  book: BookDetailCardType;
  review: ReviewType;
}

/** 책의 전체 리뷰 정보를 받아올 때의 데이터 타입*/
interface BookReviewType {
  bookId: number;
  averageRating: number;
  ratingDist: [number, number, number, number, number];
  reviewNum: number;
  reviewList: ReviewType[];
}

export type { ReviewType, MyReviewType, BookReviewType };
