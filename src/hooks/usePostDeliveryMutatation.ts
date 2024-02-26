import { PostDeliveryOption, postDelivery } from '@/api/delivery';
import { notify } from '@/components/toast/toast';
import { deliveryIdAtom } from '@/store/deliveryInfo';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';

export function usePostDeliveryMutation(orderData: PostDeliveryOption) {
  const [deliveryId, setDeliveryId] = useAtom(deliveryIdAtom);
  const { mutate } = useMutation({
    mutationFn: (orderData: PostDeliveryOption) => {
      return postDelivery(orderData);
    },
  });
  return mutate;
}
