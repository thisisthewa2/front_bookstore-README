type SortType =
  | 'STAR'
  | 'REVIEW'
  | 'VIEW'
  | 'POPULATION'
  | 'PRICE'
  | 'NEWEST'
  | 'BESTSELLER'
  | 'ID';

export interface Sort {
  sort?: SortType; // 정렬 기준입니다(STAR REVIEW VIEW POPULATION PRICE ID)
}

export interface BookParams extends Sort {
  bookId?: string; // 현재 조회를 시작할 도서 아이디입니다.
  limit?: string; // 페이지당 가져올 데이터 수 입니다.
  ascending?: true | false; //정렬 오름차(true) 내림차(false) 기준입니다.
  search?: string;
}

export interface BookParamsV2 {
  navigationMethod: 'INFINITE_SCROLL' | 'PAGINATION';
  sortType: SortType;
  ascending: true | false;
  cursorId?: string;
  offset?: string;
  limit?: string;
  search?: string;
  enabled?: any;
}

export interface putBookPath {
  bookId: number;
}

interface BookmarksType {
  bookmarks: {
    bookId: number;
    bookmarkId: number;
    marked: boolean;
    memberId: number;
  };
}

interface BookStaticType {
  bookmarkCount: number;
  reviewCount: number;
  viewCount: number;
  quantityCount: number;
  averageRating: number;
}

export interface BookData extends BookmarksType {
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
  bookImgUrl: string;
  publisher: string;
  publishedDate: string;
  quantityCount: number | null;
  createDate: string;
  updateDate: string | null;
  statics: BookStaticType;
}
