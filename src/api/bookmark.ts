import { BookmarkParams, deleteBookmarkPath, postBookmarkPath } from '@/types/api/bookmark';
import {
  useDelete,
  useFetch,
  useUpdate,
  useUpdateType,
} from '@/utils/reactQuery';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

//찜 목록 조회
const getBookmark = async (params: BookmarkParams) => {
  const result = await instance.get('/bookmark', {
    params,
  });
  return result.data.data;
};

export const useGetCart = (params: BookmarkParams) => {
  return useFetch(QUERY_KEY.bookmark, getBookmark, params);
};

//회원 or 상품 찜개수 조회
const getOptionBookmark = async (option: {
  id: string;
  type: 'member' | 'book';
}) => {
  const { id, type } = option;
  const result = await instance.get(`/bookmark/${id}/${type}`);
  return result.data.data;
};

export const useGetOptionBookmark = (option: {
  id: string;
  type: 'member' | 'book';
}) => {
  return useFetch(QUERY_KEY.bookmark, getOptionBookmark, option);
};

//찜 하기
export const postBookmark = async (bookId: number) => {
  const result = await instance.post(`/bookmark/${bookId}`);
  return result.data.data;
};

export const usePostBookmark = (
  bookId: number,
  { onSuccess, onError, onSettled, onMutate }: useUpdateType = {},
) => {
  return useUpdate(postBookmark, bookId, {
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
};

//찜 삭제
const deleteBookmark = async (bookmarkId: string) => {
  const result = await instance.delete(`/bookmark/${bookmarkId}`);
  return result.data;
};

// 해당 userID로 찜 list조회
export const getBookMarkList = async (offset: number, limit: number) => {
  const result = await instance.get(
    `/bookmark?offset=${offset}&limit=${limit}&sort=price`,
  );
  return result.data;
};

// 찜 아이템(개별, 다중 삭제)
export const deleteBookMarkItem = async (bookmarkId: string) => {
  const result = await instance.delete(
    `/bookmark?bookmarkIds=${encodeURI(bookmarkId)}`,
  );
  return result.data;
};

export const useDeleteBookmark = (option: deleteBookmarkPath) => {
  return useUpdate(deleteBookMarkItem, option.bookmarkId, option);
};

// 해당 책에 대한 찜 여부 조회
export const getIsBookmarked = async (bookId: string) => {
  const result = await instance.get(`/bookmark/${bookId}/check`);
  return result.data.data;
};

export const useGetIsBookmarked = ({ bookId = "", enabled = true }) => {
  return useFetch(QUERY_KEY.bookmark, getIsBookmarked, bookId, enabled);
};