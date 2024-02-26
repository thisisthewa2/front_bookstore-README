import { QUERY_KEY } from '@/constants/queryKey';
import { FormData } from '@/hooks/useFormControl';
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
export const postReview = async (data: FormData) => {
  const result = await instance.post('review', {
    reviewRating: data.required,
    bookId: data.id,
    content: data.content,
  });
  return result.data;
};

export const usePostReview = (data: FormData) => {
  return useUpdate(postReview, data);
};

//리뷰 수정
const putReview = async (putFormData: FormData) => {
  const {option, content} = putFormData
  const result = await instance.put(`review/${option}`, {
    content,
  });
  return result.data;
};

export const usePutReview = (putFormData: FormData) => {
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