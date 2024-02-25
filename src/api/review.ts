import { QUERY_KEY } from '@/constants/queryKey';
import {  ReviewParams } from '@/types/api/review';
import { useDelete, useFetch, useUpdate } from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';

interface GetReviewOption {
  bookId: string;
  params?: ReviewParams;
}

//리뷰조회, 단일조회
const getReview = async (reviewId: number) => {
  const result = await instance.get(`review/${reviewId}`);
  return result.data;
};

export const useGetReview = (reviewId: number) => {
  return useFetch(QUERY_KEY.review, getReview, reviewId);
};

//리뷰 등록
interface PostReviewOption {
  option?: number;
  content?: string;
}

export const postReview = async (data: PostReviewOption) => {
  const result = await instance.post('review', {
    reviewRating: data.option,
    ...data,
  });
  return result.data;
};

export const usePostReview = (data: PostReviewOption) => {
  return useUpdate(postReview, data);
};

//리뷰 수정
//TODO : api 나오면 interface type 수정필요
interface PutReviewOption {
  option?: number;  //id
  content?: string; //review 내용
}

const putReview = async (putFormData: PutReviewOption) => {
  const {option, content} = putFormData
  const result = await instance.put(`review/${option}`, {
    content,
  });
  return result.data;
};

export const usePutReview = (putFormData: PutReviewOption) => {
  return useUpdate(putReview, putFormData);
};

//리뷰 삭제
const deleteReview = async (id?: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};

export const useDeleteReview = (id?: number) => {
  return useDelete(deleteReview, id);
};

// 도서 아이디로 리뷰 전체 페이징 조회
export const getReviewList = async (option: GetReviewOption) => {
  const { bookId, params } = option;
  const result = await instance.get(`/review/${bookId}/book`, {
    params,
  });
  return result.data;
};

export const useGetReviewList = (option: GetReviewOption) => {
  return useFetch(QUERY_KEY.book, getReviewList, option);
};