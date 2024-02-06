import BookRating from '@/components/book/bookRating/bookRating';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import MainLayout from '@/components/layout/mainLayout';
import useInfinite from '@/hooks/useInfinite';
import { myWishListData } from '@/pages/api/wishMock';
import { WishListData } from '@/types/wishPageType';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';

type WishListNavProps = {
  wishListData: WishListData[];
  selectedItemArr: WishListData[];
  resetSelectedItemArr: Function;
  setSelectedItemArr: React.Dispatch<SetStateAction<WishListData[]>>;
  handleDeleteSelectedItems: Function;
};

const START = 0;
function fetchNextData(start: number, end: number) {
  const dataByScreen = myWishListData.wishListArray.slice(start, end);
  return dataByScreen;
}

function WishListNav({
  wishListData,
  selectedItemArr,
  resetSelectedItemArr,
  setSelectedItemArr,
  handleDeleteSelectedItems,
}: WishListNavProps) {
  return (
    <div className="my-23 flex justify-between mobile:my-18 tablet:my-23">
      <div className="flex gap-x-8">
        <div
          className="h-20 w-20 cursor-pointer"
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
        className="cursor-pointer text-14 font-normal text-black"
        onClick={() => handleDeleteSelectedItems()}>
        선택항목 삭제
      </span>
    </div>
  );
}
function WishListPage() {
  const [end, setEnd] = useState(8);
  const [wishListData, setWishListData] = useState(
    () => fetchNextData(START, end) || [],
  );
  const [ref, isIntersecting] = useInfinite();

  useEffect(() => {
    if (isIntersecting && wishListData.length >= end) {
      setEnd((num) => num + 8);
      setWishListData((prev) => [...prev, ...fetchNextData(end, end + 8)]);
    }
  }, [isIntersecting]);

  const [selectedItemArr, setSelectedItemArr] = useState<WishListData[]>([]);

  const resetSelectedItemArr = () => setSelectedItemArr([]);

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

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <MainLayout>
          <div className="flex w-full flex-col px-60 mobile:px-15 tablet:px-40">
            <div className="text-20 font-bold text-black">
              찜목록{wishListData.length > 0 && `(${wishListData.length})`}
            </div>
            {wishListData.length > 0 && (
              <WishListNav
                wishListData={wishListData}
                selectedItemArr={selectedItemArr}
                resetSelectedItemArr={resetSelectedItemArr}
                setSelectedItemArr={setSelectedItemArr}
                handleDeleteSelectedItems={handleDeleteSelectedItems}
              />
            )}
            {wishListData.length > 0 ? (
              <div
                className="tablet: grid grid-cols-2 gap-x-20 gap-y-20 mobile:grid-cols-1 mobile:gap-y-10
                  tablet:grid-cols-1">
                {wishListData.map((item) => {
                  const selectedItems = filteredDataByTargetId(
                    selectedItemArr,
                    item.id,
                  );
                  const pickedNum = selectedItems.map((item) => item.id)[0];
                  return (
                    <div
                      key={item.id}
                      className={`relative flex items-center border-2 pb-43 pr-82 pt-40 ${
                        item.id === pickedNum ? 'border-green' : 'border-gray-1'
                      } rounded-[10px] bg-white`}>
                      <div
                        className="absolute right-10 right-20 top-20 cursor-pointer mobile:top-10"
                        onClick={() => {
                          const filteredWishListData =
                            filteredDataByNotTargetId(wishListData, item.id);
                          setWishListData(filteredWishListData);
                        }}>
                        <Image
                          src="/icons/Close.svg"
                          alt="엑스"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div
                        className="mx-20 w-20 mobile:mx-10"
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
                        <div className="h-20 w-20 cursor-pointer">
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
                      <div className="flex gap-x-20 rounded-[10px]">
                        <PreviewBookInfo size="sm" />
                        <div className="mobile:w- flex w-274 flex-col gap-y-8 mobile:w-147">
                          <div className="line-clamp-2 break-all text-15 font-bold text-black">
                            {item.title}
                          </div>
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-3">
                            {item.author}
                          </span>
                          <div className="flex">
                            <BookRating rating={item.rating} />
                          </div>
                          <span className="text-14">[{item.genre}]</span>
                          <span className="text-color text-14 font-bold">
                            {item.price.toLocaleString()}원
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-120 w-full">
                <p className="text-center text-gray-4">찜한 상품이 없어요</p>
              </div>
            )}
          </div>
        </MainLayout>
      </div>
      <div ref={ref} />
    </div>
  );
}

export default WishListPage;
