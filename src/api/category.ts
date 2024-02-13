import { instance } from 'src/libs/instance';

//국내, 해외 카테고리 조회
export const getCategory = async (category:string) => {
  const result = await instance.get(`review/${category}`);
  return result.data;
};

// 전체 카테고리 리스트 조회
export const getCategoryList = async () => {
  const result = await instance.get(`/category`);
  return result.data.data;
};
