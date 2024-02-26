// 구매하기 버튼 로직.

import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { PayMentAtom } from '@/types/cartType';
import { basketItemList } from '@/store/state';
import { useSession } from 'next-auth/react';

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
  const { status } = useSession();

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
    if (status === "unauthenticated") {
      router.push("/signin");
    return;
    }
    
    setNowPayItem(setNowPayItemList);
    router.push('/order');
  };

  return { handlePayNowButton };
}

export default usePayNowItem;
