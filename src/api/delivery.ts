import { QUERY_KEY } from '@/constants/queryKey';
import { convertDateType } from '@/utils/convertDate';
import { useFetch, useUpdate } from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';
import { FormData } from '@/hooks/useFormControl';


//배달상태조회
const getDelivery = async (id: number) => {
  const result = await instance.get(`delivery/${id}`);
  return result.data;
};

export const useGetDelivery = (id: number) => {
  return useFetch(QUERY_KEY.delivery, getDelivery, id);
};

export interface DeliveryOrderBook {
  bookId: number;
  quantity: number;
}
//배달 등록
//TODO : api 나오면 interface type 수정필요
export interface PostDeliveryOption {
  name: string;
  phone: string;
  address: string;
  message: string;
  paymentMethod: string;
  paymentAmount: number;
  basketIds: (number | undefined)[];
  OrderBooks: DeliveryOrderBook[];
  isDefault: boolean;
  enabled?: any;
}

export const postDelivery = async (option: PostDeliveryOption) => {
  const result = await instance.post(`delivery/`, {
    option,
  });
  return result.data;
};

export const usePostDelivery = (option: PostDeliveryOption) => {
  return useUpdate(postDelivery, option, option.enabled);
};

//배달상태 수정
const putDelivery = async (data: FormData) => {
  const result = await instance.put('delivery', {
    deliveryId: data.id,
    deliveryStatus: data.option,
  });
  return result.data;
};

export const usePutDelivery = (data: FormData) => {
  return useUpdate(putDelivery, data);
};

export const getDeliveryList = async (
  startDate: convertDateType,
  endDate: convertDateType,
) => {
  const startDateFormat = `${startDate.year}-${startDate.month < 10 ? `0${startDate.month}` : startDate.month}-${startDate.day < 10 ? `0${startDate.day}` : startDate.day}`;
  const endDateFormat = `${endDate.year}-${endDate.month < 10 ? `0${endDate.month}` : endDate.month}-${endDate.day < 10 ? `0${endDate.day}` : endDate.day}`;

  const result = await instance.get(
    `delivery?deliveryStatus=ALL&startDate=${startDateFormat}&endDate=${endDateFormat}`,
  );
  return result.data;
};

type DeliveryStatus = {
  deliveryId: number;
  deliveryStatus: string;
};

// 회원배송상태변경
const putDeliveryStatus = async (data: DeliveryStatus) => {
  const result = await instance.put('delivery', data);
  return result.data;
};
