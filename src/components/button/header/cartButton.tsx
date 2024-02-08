import Image from 'next/image';
import CartIcon from '@/public/icons/CartIcon.svg';
import Link from 'next/link';
import { getNumItemsOfCart } from '@/utils/getNumItemsOfCart';

interface CardChipProps {
  numItemsOfCart: number | undefined;
}

function CartButton({ numItemsOfCart }: CardChipProps) {
  const items = numItemsOfCart
    ? getNumItemsOfCart(numItemsOfCart)
    : numItemsOfCart;

  const getCircleStyle = () =>
    Number(numItemsOfCart) < 10
      ? 'text-12 mobile:text-10'
      : 'text-[9px] mobile:text-[7px]';

  return (
    <Link href="/cart">
      <button className="relative flex h-14 w-14 items-center tablet:h-24 tablet:w-24 pc:h-24 pc:w-24">
        <div className="relative h-full w-full items-center">
          <Image src={CartIcon} alt="장바구니 이미지" fill />
          {Number(numItemsOfCart) > 0 && (
            <div
              className={`flex-center absolute bottom-6 left-6 h-20 w-20 justify-center
                rounded-full bg-green p-1 text-white mobile:h-14 mobile:w-14 tablet:bottom-12 tablet:left-15
                pc:bottom-12 pc:left-15 ${getCircleStyle()}`}>
              {items}
            </div>
          )}
        </div>
      </button>
    </Link>
  );
}

export default CartButton;
