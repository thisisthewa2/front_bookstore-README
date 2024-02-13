export interface BookParams {
  bookId?: string; // 현재 조회를 시작할 도서 아이디입니다.
  limit: string; // 페이지당 가져올 데이터 수 입니다.
  sort: string; // 정렬 기준입니다(STAR REVIEW VIEW POPULATION PRICE ID NEWEST)
  ascending: string; //정렬 오름차(true) 내림차(false) 기준입니다.
}

export interface BookData {
  bookId: number;
  bookTitle: string;
  description: string | null;
  authors: string[];
  categories: [string, string];
  bookmarkCount: number;
  reviewCount: number;
  viewCount: number;
  price: number;
  averageRating: number;
  bookImgUrl: string | null;
  publisher: string;
  publishedDate: string;
  quantityCount: number | null;
  createDate: string;
  updateDate: string | null;
}
