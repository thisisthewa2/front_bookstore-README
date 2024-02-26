import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import CartPageHeader from '@/components/button/header/cartHeader';
import CartPayment from '@/components/cart/cartPayment';
import OrderBookCount from '@/components/cart/orderBookCount';
import MainLayout from '@/components/layout/mainLayout';
import useDeleteBasketQuery from '@/hooks/useDeleteBasketQuery';
import useGetBasKetQuery from '@/hooks/useGetBasKetQuery';
import { CartItem } from '@/types/cartType';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';
import CheckedCheckBoxIcon from '@/public/icons/CheckedCheckBox.svg';
import CheckBoxIcon from '@/public/icons/CheckBox.svg';

function CartPage() {
  const [wishListData, setWishListData] = useState<CartItem[]>([]);
  const [selectedItemArr, setSelectedItemArr] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDisCount] = useState(0);
  const { data, isError, isLoading, isSuccess } = useGetBasKetQuery();
  const deleteBasketItemMutation = useDeleteBasketQuery();

  const resetSelectedItemArr = () => setSelectedItemArr([]);
  const calcBookPlusCount = (
    wishList: CartItem[],
    item: CartItem,
    setter: React.Dispatch<React.SetStateAction<CartItem[]>>,
  ) => {
    const itemIdx = wishList.findIndex(
      (data) => data.basketId === item.basketId,
    );
    if (itemIdx > -1) {
      let clickedCount = wishList[itemIdx].count + 1;
      setter((prev) =>
        prev.map((ele, index) =>
          index === itemIdx ? { ...ele, count: clickedCount } : ele,
        ),
      );
    }
  };

  const calcBookMinusCount = (
    wishList: CartItem[],
    item: CartItem,
    setter: React.Dispatch<React.SetStateAction<CartItem[]>>,
  ) => {
    const itemIdx = wishList.findIndex(
      (data) => data.basketId === item.basketId,
    );
    if (itemIdx > -1) {
      let clickedCount = wishList[itemIdx].count - 1;
      setter((prev) =>
        prev.map((ele, index) =>
          index === itemIdx ? { ...ele, count: clickedCount } : ele,
        ),
      );
    }
  };

  const filteredDataByTargetId = (arr: CartItem[], targetId: number) =>
    arr.filter((arrItem) => arrItem.basketId === targetId);

  const filteredDataByNotTargetId = (arr: CartItem[], targetId: number) =>
    arr.filter((arrItem) => arrItem.basketId !== targetId);

  const handleDeleteSelectedItems = async () => {
    const selectedBookMarkIds = selectedItemArr.map((item) => item.basketId);
    await deleteBasketItemMutation.mutateAsync(selectedBookMarkIds.join(','));
    const filteredData = wishListData.filter(
      (item) => !selectedBookMarkIds.includes(item.basketId),
    );
    setWishListData(filteredData);
    resetSelectedItemArr();
  };

  useEffect(() => {
    const totalPrice = selectedItemArr.reduce((acc, item) => {
      acc += item.price * item.count;
      return acc;
    }, 0);
    setTotalAmount(totalPrice);
  }, [selectedItemArr]);

  const bookTotalCount = selectedItemArr.reduce((acc, item) => {
    acc += item.count;
    return acc;
  }, 0);

  useEffect(() => {
    if (data && isSuccess) {
      setWishListData([...data]);
      setSelectedItemArr([...data]);
    }
  }, [isSuccess]);

  if (isError) return <div>Error loading data</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <MainLayout>
      <div className="w-full max-w-[1200px]">
        <div className="relative w-full">
          <div
            className="flex w-full gap-x-30 px-60 mobile:flex-col mobile:gap-x-10 mobile:px-15 tablet:gap-x-20
                tablet:px-40">
            <div
              className="mb-120 mt-40 grid w-full flex-1 grid-cols-1 gap-x-20 gap-y-20 mobile:mt-20
                  mobile:grid-cols-1 mobile:gap-y-10 tablet:mt-20 tablet:grid-cols-1">
              <div className="h-27 text-20 font-bold text-black">
                장바구니
                {wishListData &&
                  wishListData.length > 0 &&
                  `(${wishListData.length})`}
              </div>
              {wishListData.length > 0 ? (
                <CartPageHeader
                  wishListData={wishListData}
                  selectedItemArr={selectedItemArr}
                  resetSelectedItemArr={resetSelectedItemArr}
                  setSelectedItemArr={setSelectedItemArr}
                  handleDeleteSelectedItems={handleDeleteSelectedItems}
                />
              ) : (
                <div className="w-full text-center text-16 text-gray-4 mobile:mb-120 mobile:mt-120">
                  장바구니에 아직 상품이 없어요!
                </div>
              )}
              {wishListData.map((item) => {
                const selectedItems = filteredDataByTargetId(
                  selectedItemArr,
                  item.basketId,
                );
                const pickedItemId = selectedItems.map(
                  (item) => item.basketId,
                )[0];
                return (
                  <div
                    key={item.basketId}
                    className={`relative flex flex-1 items-center border-2 pb-43 pr-44 pt-40 mobile:pb-75
                        mobile:pt-20 ${item.basketId === pickedItemId ? 'border-primary' : 'border-gray-1'} rounded-[10px]
                        bg-white`}>
                    <div
                      className="absolute right-20 top-20 cursor-pointer mobile:right-10 mobile:top-10"
                      onClick={() => {
                        deleteBasketItemMutation.mutate(String(item.basketId));
                        const filteredWishListData = filteredDataByNotTargetId(
                          wishListData,
                          item.basketId,
                        );
                        setWishListData(filteredWishListData);
                        const filteredWishListData2 = filteredDataByNotTargetId(
                          selectedItemArr,
                          item.basketId,
                        );
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
                        const targetIdx = selectedItemArr.findIndex(
                          (clickedItem) =>
                            clickedItem.basketId === item.basketId,
                        );
                        if (targetIdx !== -1) {
                          selectedItemArr.splice(targetIdx, 1);
                          setSelectedItemArr([...selectedItemArr]);
                        } else {
                          setSelectedItemArr((prev) => [...prev, item]);
                        }
                      }}>
                      <div className="cursor-pointer">
                        <Image
                          src={
                            item.basketId === selectedItems[0]?.basketId
                              ? CheckedCheckBoxIcon
                              : CheckBoxIcon
                          }
                          alt="체크아이콘"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className="relative flex w-full flex-1 mobile:static">
                      <div className="flex gap-x-20 rounded-[10px]">
                        <PreviewBookInfo
                          size="sm"
                          image={item.bookImgUrl}
                          bookId={item.bookId}
                        />
                        <div className="flex flex-col gap-y-8">
                          <div className="flex flex-col">
                            <div
                              className="line-clamp-2 w-256 break-all text-15 font-bold text-black mobile:w-147
                                  tablet:w-196">
                              {item.bookTitle}
                            </div>
                            <div
                              className="w-256 overflow-hidden text-ellipsis whitespace-nowrap text-gray-3 mobile:w-147
                                  tablet:w-196">
                              {item.authors.join(', ')}
                            </div>
                          </div>
                          <div className="text-color mb-12 text-14 font-bold">
                            {item.price.toString().replace(THOUSAND_UNIT, ',')}
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
                            count={item.count}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bottom-0 right-0 flex flex-col items-end border-gray-1
                            mobile:w-full mobile:flex-row mobile:justify-between mobile:border-t-2 mobile:px-20
                            mobile:py-16">
                        <span className="text-20 font-bold text-black">
                          {(item.count && item.count > 0
                            ? item.price * item.count
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
              selectedItemArr={selectedItemArr}
              wishListData={wishListData}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CartPage;
