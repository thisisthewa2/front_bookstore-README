import { atom } from 'jotai';
import { DeliveryInfo } from '@/types/deliveryInfo';

export const deliveryInfoAtom = atom<DeliveryInfo>({
  name: '',
  phone: '',
  address: '',
  message: '',
  isDefault: false,
});

export const deliveryIdAtom = atom(null);
