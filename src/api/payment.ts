import { instance } from 'src/libs/instance';

//결제정보 조회
export const getCart = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};

//결제정보 등록
export const postReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`review/${id}`, {
    data,
  });
  return result.data;
};

//결제정보 수정
export const putReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`review/${id}`, {
    data,
  });
  return result.data;
};

//결제정보 삭제
export const deleteReview = async (id: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};
