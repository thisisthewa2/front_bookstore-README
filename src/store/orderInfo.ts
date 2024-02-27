import { atom } from 'jotai';
import { PostDeliveryOption } from '@/api/delivery';
export const orderInfoAtom = atom<PostDeliveryOption>({
  name: '',
  phone: '',
  address: '',
  message: '',
  paymentMethod: '',
  paymentAmount: 0,
  basketIds: [],
  orderBooks: [],
  basicAddress: false,
});
