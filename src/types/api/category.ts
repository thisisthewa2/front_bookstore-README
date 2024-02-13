// 카테고리 개별 타입
export interface CategoryType{
  mainId: number;
  categoryId?: number;
  subId?: number;
  mainName?: string;
  subName?: string;
  link?: string;
}

// 전역상태로 관리하는 CategoryAtom 변수의 타입
export interface CategoryAtomType{
  domestic: CategoryType[];
  foreign: CategoryType[];
}