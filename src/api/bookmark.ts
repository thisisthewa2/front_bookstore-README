import { BookmarkParams, postBookmarkPath } from '@/types/api/bookmark';
import { useDelete, useFetch, usePost } from '@/utils/reactQuery';
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
const postBookmark = async (option: postBookmarkPath) => {
  const { bookId, memberId } = option;
  const result = await instance.post(`/bookmark/${bookId}/${memberId}`);
  return result.data.data;
};

export const usePostBookmark = (option: postBookmarkPath) => {
  return usePost(postBookmark, option);
};

//찜 삭제
const deleteBookmark = async (bookmarkId: string) => {
  const result = await instance.delete(`/bookmark/${bookmarkId}`);
  return result.data;
};

export const useDeleteBookmark = (bookmarkId: string) => {
  return useDelete(deleteBookmark, bookmarkId);
};
