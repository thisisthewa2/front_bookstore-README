export interface CommunityCard {
  id: number; //커뮤니티글 번호
  updatedAt: string;
  writer: {
    userId: string;
    nickname: string;
    profileImg: string;
  };
  bookId: number; // 커뮤니티 글을 보다가 책이미지를 클릭하면 해당 링크를 받아오기 위해 필요
  bookImgUrl: string;
  bookTitle: string;
  content: string; // 커뮤니티 글 내용
}

export interface GetCommunityParams {
  cursorId?: number;
  limit?: number;
}

export interface GetCommunityOption {
  endpoint?: number;
  memberId?: number;
  params?: GetCommunityParams;
}

export interface PostCommunityData {
  option?:string | number | boolean;
  bookId?: number;
  title?: string;
  content?: any;
}

export interface PutCommunityOption {
  option?: number;
  required?: number;
  content?: string;
}