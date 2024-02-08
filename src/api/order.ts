import { instance } from 'src/libs/instance';

//주문조회
export const getCart = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};

//주문 등록
export const postReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`review/${id}`, {
    data,
  });
  return result.data;
};

//주문 수정
export const putReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`review/${id}`, {
    data,
  });
  return result.data;
};

//주문 삭제
export const deleteReview = async (id: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};
