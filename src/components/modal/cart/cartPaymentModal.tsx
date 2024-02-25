import CartModal from '@/components/modal/cart/cartModal';
import React from 'react';

type CartPaymentModalTypes = {
  wishListDataLength: number;
  selectedItemArrLength: number;
  isModalOpen: boolean;
  handleAlertModalOpenClick: () => void;
};

function CartPaymentModal({
  wishListDataLength,
  selectedItemArrLength,
  isModalOpen,
  handleAlertModalOpenClick,
}: CartPaymentModalTypes) {
  if (isModalOpen && !wishListDataLength) {
    return (
      <CartModal
        title="장바구니에 상품이 없습니다"
        description="상품을 장바구니에 담아주세요"
        onClick={handleAlertModalOpenClick}
      />
    );
  }

  if (isModalOpen && !selectedItemArrLength) {
    return (
      <CartModal
        title="선택된 상품이 없습니다"
        description="상품을 선택해주세요"
        onClick={handleAlertModalOpenClick}
      />
    );
  }

  return null;
}

export default CartPaymentModal;
