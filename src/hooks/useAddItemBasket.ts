// 장바구니 담기 버튼 로직
import { useSession } from 'next-auth/react';
import { useAddToBasket } from './api/useAddToBasket';
import { useRouter } from 'next/router';

interface AddItemBasketProps {
  bookId: number;
  count?: number;
}

function useAddItemBasket({ bookId, count = 1 }: AddItemBasketProps) {
    const router = useRouter();
  const { status } = useSession();
    // 장바구니 버튼 로직
  const { addToBasket } = useAddToBasket({
    bookId: bookId,
    count: count,
  });

  const handleAddToBasket = async () => {
    if (status === "unauthenticated") {
      router.push("/signin");
      return;
    }
    addToBasket();
  };
  return { handleAddToBasket };
}

export default useAddItemBasket