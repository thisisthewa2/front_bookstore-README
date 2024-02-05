import { BookReviewType } from "@/types/bookReviewType";
import { BookDetailCardType } from "@/types/cardType";

export const BookDetailMock1: BookDetailCardType = {
  bookId: 112, 
  publishedAt: "2020-01-30",
  orderNum: 13,
  categoryList: ["국내", "과학"],
  title: "재미없는 과학! 재미없는 과학! 재미없는 과학!",
  imageUrl: "/images/SampleBookCover1.jpeg",
  publisher: "상상 출판사",
  price: 12000,
  authors: ["김남길", "최석준"],
  views: 32,
  bookmarkNum: 17,
  reviewNum: 5,
  rating: 4.2,
  isBookmarked: true,
}

export const ReviewListMock1: BookReviewType = {
  bookId: 112,
  averageRating: 4.2,
  ratingDist: [0, 0, 1, 2, 2],
  reviewNum: 5,
  reviewList: [
    {
        reviewId: 325,
  isOwner: false,
  createdAt: "2020-01-03",
  reviewTitle: "아주 흥미롭군요",
  reviewProfileImg: "",
  profileName: "철쭉소년",
  reviewContent: "일반인도 이해하기 쉽게 쓴 과학책입니다. 작가의 과학 지식이 상당한가보군요.",
  reviewRating: 5,
    },
                {
        reviewId: 320,
  isOwner: false,
  createdAt: "2020-01-05",
  reviewTitle: "??",
  reviewProfileImg: "",
  profileName: "철쭉소년",
  reviewContent: "뭔말인지 모르게떠염",
  reviewRating: 4,
    },
        {
        reviewId: 4,
  isOwner: false,
  createdAt: "2020-02-01",
  reviewTitle: "책 너무 어려워요",
  reviewProfileImg: "",
  profileName: "흰둥이",
  reviewContent: "10페이지 읽다가 자버림",
  reviewRating: 5,
    },

                {
        reviewId: 16,
  isOwner: false,
  createdAt: "2020-03-03",
  reviewTitle: "개어려움",
  reviewProfileImg: "",
  profileName: "책 재밌으면 짖는 개",
  reviewContent: "이걸 읽으라고 낸 책이냐 논문이지",
  reviewRating: 3,
    },
                    {
        reviewId: 221,
  isOwner: false,
  createdAt: "2020-03-02",
  reviewTitle: "책 표지한테 속았음",
  reviewProfileImg: "",
  profileName: "호에엑",
  reviewContent: "아니 표지는 겁나 어린이책처럼 생긴 주제에 개어려움",
  reviewRating: 4,
    }
  ],
}