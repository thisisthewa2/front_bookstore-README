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
        <span className="text-gray-4 text-14">전체선택</span>
      </div>
      <span
        className="text-black font-normal cursor-pointer"
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
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        <MainLayout>
          <div className="w-full relative">
            <div
              className="flex mobile:flex-col px-60 tablet:px-40 mobile:px-15 gap-x-30 tablet:gap-x-20
                mobile:gap-x-10">
              <div
                className="mt-20 flex-1 grid grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1 gap-x-20
                  tablet: gap-y-20 mobile:gap-y-10">
                <div className="text-black text-20 font-bold">
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
                  <div className="text-gray-4 text-16 text-center mobile:mt-120 mobile:mb-120">
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
                      className={`flex-1 flex relative items-center pt-40 pb-43 pr-44 mobile:pt-20 mobile:pb-75
                        border-2 ${item.id === pickedItemId ? 'border-green' : 'border-gray-1'} bg-white
                        rounded-[10px]`}>
                      <div
                        className="absolute top-20 right-20 mobile:top-10 mobile:right-10 cursor-pointer"
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
                          className="mobile:w-18 h-18"
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
                      <div className="w-full flex flex-1 relative mobile:static">
                        <div className="flex gap-x-20 rounded-[10px]">
                          <PreviewBookInfo size="sm" />
                          <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col">
                              <div
                                className="w-256 tablet:w-196 mobile:w-147 text-15 text-black font-bold break-all
                                  line-clamp-2">
                                {item.title}
                              </div>
                              <div
                                className="w-256 tablet:w-196 mobile:w-147 text-gray-3 whitespace-nowrap text-ellipsis
                                  overflow-hidden">
                                {item.author}
                              </div>
                            </div>
                            <div className="text-14 text-color font-bold mb-12">
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
                          className="absolute right-0 bottom-0 flex flex-col items-end mobile:border-t-2
                            border-gray-1 mobile:flex-row mobile:justify-between mobile:w-full mobile:px-20
                            mobile:py-16">
                          <span className="text-black text-20 font-bold">
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
