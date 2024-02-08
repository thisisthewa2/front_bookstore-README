import { instance } from 'src/libs/instance';

//리뷰조회, 단일조회
export const getReview = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};

//리뷰 등록
export const postReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`review/${id}`, {
    data,
  });
  return result.data;
};

//리뷰 수정
export const putReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`review/${id}`, {
    data,
  });
  return result.data;
};

//리뷰 삭제
export const deleteReview = async (id: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};
