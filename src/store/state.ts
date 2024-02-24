import { PayMentAtom } from '@/types/cartType';
import { atom } from 'jotai';
import { CategoryAtomType, CategoryType } from '@/types/api/category';

export const countAtom = atom(0);

export const pointVisibleAtom = atom(true);

export const CurrentPageArrayIndexAtom = atom(0);

export const CurrentPageStateAtom = atom(1);

export const chooseBookIdAtom = atom(0);

// 장바구니 money Atom
export const basketItemList = atom<PayMentAtom[]>([]);

// 맨 처음 카테고리 리스트 데이터를 받아와 저장하는 전역상태
export const CategoryListAtom = atom<CategoryAtomType>({
  domestic: [],
  foreign: [],
});

// 내가 현재 위치한 카테고리 mainId, subId를 알려주는 전역상태
export const LocatedCategoryAtom = atom<CategoryType>({
  mainId: 0,
});
