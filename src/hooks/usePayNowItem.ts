// 구매하기 버튼 로직.

import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { PayMentAtom } from '@/types/cartType';
import { basketItemList } from '@/store/state';

interface PayNowItemProps {
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  authors: string[];
  count?: number;
}

function usePayNowItem({
  bookId,
  bookImgUrl,
  bookTitle,
  price,
  authors,
  count = 1,
}: PayNowItemProps) {
  const [, setNowPayItem] = useAtom(basketItemList);
  const router = useRouter();
  const setNowPayItemList: PayMentAtom[] = [
    {
      bookId: bookId,
      bookImgUrl: bookImgUrl,
      bookTitle: bookTitle,
      price: price,
      authors: authors,
      count: count,
    },
  ];

  const handlePayNowButton = () => {
    setNowPayItem(setNowPayItemList);
    router.push('/order');
  };

  return { handlePayNowButton };
}

export default usePayNowItem;
