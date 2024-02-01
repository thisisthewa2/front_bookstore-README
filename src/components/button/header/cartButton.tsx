import Image from 'next/image';
import CartIcon from '@/public/icons/CartIcon.svg';
import Link from 'next/link';
import { getNumItemsOfCart } from '@/utils/getNumItemsOfCart';

interface CardChipProps {
  numItemsOfCart: number;
}

function CartButton({ numItemsOfCart }: CardChipProps) {
  const items = getNumItemsOfCart(numItemsOfCart);
  const getCircleStyle = () =>
    Number(items) < 10
      ? 'text-12 mobile:text-10'
      : 'text-[9px] mobile:text-[7px]';

  return (
    <Link href="/cart">
      <button className="flex relative items-center w-14 h-14 tablet:w-24 tablet:h-24 pc:w-24 pc:h-24">
        <div className="relative w-full h-full items-center">
          <Image src={CartIcon} alt="장바구니 이미지" fill />
          {numItemsOfCart && (
            <div
              className={`absolute bottom-6 pc:bottom-12 tablet:bottom-12 left-6 tablet:left-15 pc:left-15
                flex-center bg-green text-white rounded-full p-1 mobile:w-14 mobile:h-14 w-20
                h-20 justify-center ${getCircleStyle()}`}>
              {items}
            </div>
          )}
        </div>
      </button>
    </Link>
  );
}

export default CartButton;
