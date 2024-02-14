import { QUERY_KEY } from '@/constants/queryKey';
import { useDelete, useFetch, usePost, usePut } from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';

//리뷰조회, 단일조회
const getReview = async (reviewId: number) => {
  const result = await instance.get(`review/${reviewId}`);
  return result.data;
};

export const useGetReview = (reviewId: number) => {
  return useFetch(QUERY_KEY.review, getReview, reviewId);
};

//리뷰 등록
//TODO : api 나오면 interface type 수정필요
interface PostReviewOption {
  id: number;
  data: string;
}

const postReview = async (option: PostReviewOption) => {
  const { id, data } = option;
  const result = await instance.post(`review/${id}`, {
    data,
  });
  return result.data;
};

export const usePostReview = (option: PostReviewOption) => {
  return usePost(postReview, option);
};

//리뷰 수정
//TODO : api 나오면 interface type 수정필요
interface PutReviewOption {
  id: number;
  data: string;
}

const putReview = async (option: PutReviewOption) => {
  const { id, data } = option;
  const result = await instance.put(`review/${id}`, {
    data,
  });
  return result.data;
};

export const usePutReview = (option: PutReviewOption) => {
  return usePut(putReview, option);
};

//리뷰 삭제
const deleteReview = async (id: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};

export const useDeleteReview = (id: number) => {
  return useDelete(deleteReview, id);
};
