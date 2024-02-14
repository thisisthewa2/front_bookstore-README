import { instance } from 'src/libs/instance';
import { QUERY_KEY } from '@/constants/queryKey';
import { useDelete, useFetch, usePost, usePut } from '@/utils/reactQuery';

//TODO: api아직 안나온상태라서 endpoint, params임의로 설정한 값임. 수정필요

//결제정보 조회
const getPayment = async (id: number) => {
  const result = await instance.get(`payment/${id}`);
  return result.data;
};

export const useGetOrder = (id: number) => {
  return useFetch(QUERY_KEY.payment, getPayment, id);
};

//주문 등록
//TODO : api 나오면 interface type 수정필요
interface PostPaymentOption {
  id: number;
  data: string;
}
const postPayment = async (option: PostPaymentOption) => {
  const { id, data } = option;
  const result = await instance.post(`payment/${id}`, {
    data,
  });
  return result.data;
};

export const usePostOrder = (option: PostPaymentOption) => {
  return usePost(postPayment, option);
};

//주문 수정
//TODO : api 나오면 interface type 수정필요
interface PutPaymentOption {
  id: number;
  data: string;
}

export const putPayment = async (option: PutPaymentOption) => {
  const { id, data } = option;
  const result = await instance.put(`payment/${id}`, {
    data,
  });
  return result.data;
};

export const usePutPayment = (option: PutPaymentOption) => {
  return usePut(putPayment, option);
};

//주문 삭제
export const deletePayment = async (id: number) => {
  const result = await instance.delete(`payment/${id}`);
  return result.data;
};

export const useDeletePayment = (id: number) => {
  return useDelete(deletePayment, id);
};
