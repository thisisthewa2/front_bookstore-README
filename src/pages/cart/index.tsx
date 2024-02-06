import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import CartPayment from '@/components/cart/cartPayment';
import OrderBookCount from '@/components/cart/orderBookCount';
import MainLayout from '@/components/layout/mainLayout';
import { myWishListData } from '@/pages/api/wishMock';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';

type WishListData = {
  id: number;
  image: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  price: number;
  clicked?: number;
};

type WishListNavProps = {
  wishListData: WishListData[];
  selectedItemArr: WishListData[];
  resetSelectedItemArr: Function;
  setSelectedItemArr: React.Dispatch<SetStateAction<WishListData[]>>;
  handleDeleteSelectedItems: Function;
};
const fetchData = () => {
  return myWishListData.wishListArray.map((ele, index) => {
    return { ...ele, clicked: 0 };
  });
};

function CartPageNav({
  wishListData,
  selectedItemArr,
  resetSelectedItemArr,
  setSelectedItemArr,
  handleDeleteSelectedItems,
}: WishListNavProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-8">
        <div
          onClick={() => {
            if (wishListData.length === selectedItemArr.length) {
              resetSelectedItemArr();
            } else {
              setSelectedItemArr([...wishListData]);
            }
          }}>
          <Image
            src={
              wishListData.length === selectedItemArr.length
                ? '/icons/CheckedCheckBox.svg'
                : '/icons/CheckBox.svg'
            }
            alt="체크아이콘"
            width={20}
            height={20}
          />
        </div>
        <span className="text-14 text-gray-4">전체선택</span>
      </div>
      <span
        className="cursor-pointer font-normal text-black"
        onClick={() => handleDeleteSelectedItems()}>
        선택항목 삭제
      </span>
    </div>
  );
}

function CartPage() {
  const [wishListData, setWishListData] = useState<WishListData[]>(() =>
    fetchData(),
  );

  const [selectedItemArr, setSelectedItemArr] = useState<WishListData[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDisCount] = useState(0);

  const resetSelectedItemArr = () => setSelectedItemArr([]);

  const calcBookPlusCount = (
    wishList: WishListData[],
    item: WishListData,
    setter: React.Dispatch<React.SetStateAction<WishListData[]>>,
  ) => {
    const itemIdx = wishList.findIndex((data) => data.id === item.id);
    if (itemIdx > -1) {
      let clickedCount = (wishList[itemIdx]['clicked'] || 1) + 1;
      setter((prev) =>
        prev.map((ele, index) =>
          index === itemIdx ? { ...ele, clicked: clickedCount } : ele,
        ),
      );
    }
  };

  const calcBookMinusCount = (
    wishList: WishListData[],
    item: WishListData,
    setter: React.Dispatch<React.SetStateAction<WishListData[]>>,
  ) => {
    const itemIdx = wishList.findIndex((data) => data.id === item.id);
    if (itemIdx > -1) {
      let clickedCount = (wishList[itemIdx]['clicked'] || 1) - 1;
      setter((prev) =>
        prev.map((ele, index) =>
          index === itemIdx ? { ...ele, clicked: clickedCount } : ele,
        ),
      );
    }
  };

  const filteredDataByTargetId = (arr: WishListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.id === targetId);

  const filteredDataByNotTargetId = (arr: WishListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.id !== targetId);

  const handleDeleteSelectedItems = () => {
    const filteredData = wishListData.filter((item) => {
      return selectedItemArr.map((picked) => picked.id).indexOf(item.id) === -1;
    });
    setWishListData(filteredData);
    resetSelectedItemArr();
  };

  useEffect(() => {
    const totalPrice = selectedItemArr.reduce((acc, item) => {
      acc += item.price * (item.clicked || 1);
      return acc;
    }, 0);
    setTotalAmount(totalPrice);
  }, [selectedItemArr]);

  const bookTotalCount = selectedItemArr.reduce((acc, item) => {
    acc += item.clicked || 1;
    return acc;
  }, 0);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <MainLayout>
          <div className="relative w-full">
            <div
              className="flex gap-x-30 px-60 mobile:flex-col mobile:gap-x-10 mobile:px-15 tablet:gap-x-20
                tablet:px-40">
              <div
                className="tablet: mt-20 grid flex-1 grid-cols-1 gap-x-20 gap-y-20
                  mobile:grid-cols-1 mobile:gap-y-10 tablet:grid-cols-1">
                <div className="text-20 font-bold text-black">
                  장바구니
                  {wishListData.length > 0 && `(${wishListData.length})`}
                </div>
                {wishListData.length > 0 ? (
                  <CartPageNav
                    wishListData={wishListData}
                    selectedItemArr={selectedItemArr}
                    resetSelectedItemArr={resetSelectedItemArr}
                    setSelectedItemArr={setSelectedItemArr}
                    handleDeleteSelectedItems={handleDeleteSelectedItems}
                  />
                ) : (
                  <div className="text-center text-16 text-gray-4 mobile:mb-120 mobile:mt-120">
                    장바구니에 아직 상품이 없어요!
                  </div>
                )}
                {wishListData.map((item) => {
                  const selectedItems = filteredDataByTargetId(
                    selectedItemArr,
                    item.id,
                  );
                  const pickedItemId = selectedItems.map((item) => item.id)[0];
                  return (
                    <div
                      key={item.id}
                      className={`relative flex flex-1 items-center border-2 pb-43 pr-44 pt-40 mobile:pb-75
                        mobile:pt-20 ${item.id === pickedItemId ? 'border-green' : 'border-gray-1'} rounded-[10px]
                        bg-white`}>
                      <div
                        className="absolute right-20 top-20 cursor-pointer mobile:right-10 mobile:top-10"
                        onClick={() => {
                          const filteredWishListData =
                            filteredDataByNotTargetId(wishListData, item.id);
                          setWishListData(filteredWishListData);
                          const filteredWishListData2 =
                            filteredDataByNotTargetId(selectedItemArr, item.id);
                          setSelectedItemArr(filteredWishListData2);
                        }}>
                        <Image
                          src="/icons/Close.svg"
                          alt="엑스"
                          width={24}
                          height={24}
                          className="h-18 mobile:w-18"
                        />
                      </div>
                      <div
                        className="mx-20 mobile:mx-10"
                        onClick={() => {
                          setSelectedItemArr((prev) => [...prev, item]);
                          const targetIdx = selectedItemArr.findIndex(
                            (clickedItem) => clickedItem.id === item.id,
                          );

                          if (targetIdx !== -1) {
                            selectedItemArr.splice(targetIdx, 1);
                            setSelectedItemArr([...selectedItemArr]);
                          }
                        }}>
                        <div className="cursor-pointer">
                          <Image
                            src={
                              item.id === selectedItems[0]?.id
                                ? '/icons/CheckedCheckBox.svg'
                                : '/icons/CheckBox.svg'
                            }
                            alt="체크아이콘"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                      <div className="relative flex w-full flex-1 mobile:static">
                        <div className="flex gap-x-20 rounded-[10px]">
                          <PreviewBookInfo size="sm" />
                          <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col">
                              <div
                                className="line-clamp-2 w-256 break-all text-15 font-bold text-black mobile:w-147
                                  tablet:w-196">
                                {item.title}
                              </div>
                              <div
                                className="w-256 overflow-hidden text-ellipsis whitespace-nowrap text-gray-3 mobile:w-147
                                  tablet:w-196">
                                {item.author}
                              </div>
                            </div>
                            <div className="text-color mb-12 text-14 font-bold">
                              {item.price
                                .toString()
                                .replace(THOUSAND_UNIT, ',')}
                              원
                            </div>
                            <OrderBookCount
                              minusFunc={() => {
                                calcBookMinusCount(
                                  wishListData,
                                  item,
                                  setWishListData,
                                );
                                calcBookMinusCount(
                                  selectedItemArr,
                                  item,
                                  setSelectedItemArr,
                                );
                              }}
                              plusFunc={() => {
                                calcBookPlusCount(
                                  wishListData,
                                  item,
                                  setWishListData,
                                );
                                calcBookPlusCount(
                                  selectedItemArr,
                                  item,
                                  setSelectedItemArr,
                                );
                              }}
                              count={item.clicked ?? 1}
                            />
                          </div>
                        </div>
                        <div
                          className="absolute bottom-0 right-0 flex flex-col items-end border-gray-1
                            mobile:w-full mobile:flex-row mobile:justify-between mobile:border-t-2 mobile:px-20
                            mobile:py-16">
                          <span className="text-20 font-bold text-black">
                            {(item.clicked && item.clicked > 0
                              ? item.price * item.clicked
                              : item.price
                            )
                              .toString()
                              .replace(THOUSAND_UNIT, ',')}
                            원
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <CartPayment
                totalAmount={totalAmount}
                totalDiscount={totalDiscount}
                bookTotalCount={bookTotalCount}
              />
            </div>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default CartPage;
