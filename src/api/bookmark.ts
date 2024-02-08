import { instance } from 'src/libs/instance';

//찜 조회
export const getCart = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};
