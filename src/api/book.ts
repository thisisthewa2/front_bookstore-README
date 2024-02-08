import { BookCache, BookParams } from '@/types/api/book';
import { instance } from 'src/libs/instance';

interface GetBookOption {
  endpoint: string;
  params: BookParams;
}

//책 전체 가져오기, 도서 단일 조회, 책 페이징 조회,
export const getBook = async (option: GetBookOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(`book/${endpoint}`, {
    params,
  });
  return result.data;
};

//도서 저장
export const postBook = async (data: BookCache) => {
  const result = await instance.post('/book', {
    data,
  });
  return result.data;
};
