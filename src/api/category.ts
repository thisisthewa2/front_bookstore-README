import { instance } from 'src/libs/instance';

//국내, 해외 카테고리 조회
export const getCategory = async (category:string) => {
  const result = await instance.get(`review/${category}`);
  return result.data;
};

