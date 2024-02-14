export interface BookmarkParams {
  memberId: string; // 조회할 회원 아이디입니다.
  offset?: string; // 조회할 페이지 번호입니다.
  limit?: string; // 조회할 페이지당 목록 개수입니다.
  sort?: string; // 조회할 정렬 조건입니다. ex)price
}

export interface postBookmarkPath {
  bookId: number;
  memberId: number;
}