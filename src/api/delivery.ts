import { QUERY_KEY } from '@/constants/queryKey';
import { useFetch, usePost, usePut } from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';

//TODO: api아직 안나온상태라서 endpoint, params임의로 설정한 값임. 수정필요

//배달상태조회
const getDelivery = async (id: number) => {
  const result = await instance.get(`delivery/${id}`);
  return result.data;
};

export const useGetDelivery = (id: number) => {
  return useFetch(QUERY_KEY.delivery, getDelivery, id)
};

//배달 등록
//TODO : api 나오면 interface type 수정필요
interface PostDeliveryOption { id: number; data: string; }

const postDelivery = async (option: PostDeliveryOption) => {
  const { id, data } = option;
  const result = await instance.post(`delivery/${id}`, {
    data,
  });
  return result.data;
};

export const usePostDelivery = (option : PostDeliveryOption) => {
  return usePost(postDelivery, option )
};

//배달상태 수정
//TODO : api 나오면 interface type 수정필요
interface PutDeliveryOption { id: number; data: string; }

const putDelivery = async (option: PutDeliveryOption) => {
  const { id, data } = option;
  const result = await instance.put(`delivery/${id}`, {
    data,
  });
  return result.data;
};

export const usePutDelivery = (option: PutDeliveryOption) => {
  return usePut(putDelivery, option);
};
