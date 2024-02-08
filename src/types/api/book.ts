export interface BookParams {
  bookId: string; // 현재 조회를 시작할 도서 아이디입니다.
  limit: string; // 페이지당 가져올 데이터 수 입니다.
  sort: string; // 정렬 기준입니다(STAR REVIEW VIEW POPULATION PRICE ID)
  ascending: string; //정렬 오름차(true) 내림차(false) 기준입니다.
}

export interface BookCache {
  bookTitle: string;
  description: string;
  authors: string[];
  categories: [string, string];
  bookmarkCount: 0;
  reviewCount: 0;
  price: 0;
  averageRating: 0;
  bookImgUrl: string;
  publishedDate: string;
}
