import { BookParams, BookParamsV2, putBookPath } from '@/types/api/book';
import { useFetch, useUpdate } from '@/utils/reactQuery';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

interface GetBookOption {
  endpoint?: string;
  params?: BookParams;
  enabled?: any;
  staleTime?: number; // 초 단위로 받음
  gcTime?: number; // 초 단위로 받음
}

//책 전체 가져오기, 도서 단일 조회
export const getBook = async (option: GetBookOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(`/book${endpoint ? `/${endpoint}` : ''}`, {
    params,
  });
  return result.data;
};

export const useGetBook = (option: GetBookOption) => {
  const { enabled, staleTime, gcTime } = option;
  return useFetch(QUERY_KEY.book, getBook, option, enabled, staleTime, gcTime);
};

//책 전체 infinite, pagination 둘다 가능
const getPageBook = async (params: BookParamsV2) => {
  const result = await instance.get(`book/v2`, {
    params,
  });

  return result.data;
};

export const useGetPageBook = (params: BookParamsV2) => {
  return useFetch(QUERY_KEY.book, getPageBook, params, params?.enabled);
};

//도서 조회수 증가
const putBookView = async (option: putBookPath) => {
  const { bookId } = option;
  const result = await instance.put(`/book/${bookId}/view`);
  return result.data;
};

export const usePutBook = (option: putBookPath) => {
  return useUpdate(putBookView, option);
};

// http://15.165.141.22:8080/book/favorite?categoryId=1%2C2%2C3&isRandom=false

// 랜덤하게 Book 100권가져오기
export const getRandomBookList = async (
  categoryId: string,
  isRandom: boolean,
) => {
  const result = await instance.get(
    `/book/favorite?categoryId=${encodeURI(categoryId)}&isRandom=${isRandom}`,
  );
  return result.data;
};
