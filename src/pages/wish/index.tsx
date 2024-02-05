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
    <div className="flex justify-between my-23 mobile:my-18 tablet:my-23">
      <div className="flex gap-x-8">
        <div
          className="cursor-pointer w-20 h-20"
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
        className="text-black text-14 font-normal cursor-pointer"
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
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1200px] w-full">
        <MainLayout>
          <div className="w-full flex flex-col px-60 tablet:px-40 mobile:px-15">
            <div className="text-black text-20 font-bold">
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
                className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-x-20 tablet: gap-y-20
                  mobile:gap-y-10">
                {wishListData.map((item) => {
                  const selectedItems = filteredDataByTargetId(
                    selectedItemArr,
                    item.id,
                  );
                  const pickedNum = selectedItems.map((item) => item.id)[0];
                  return (
                    <div
                      key={item.id}
                      className={`relative flex items-center pt-40 pb-43 pr-82 border-2 ${
                        item.id === pickedNum ? 'border-green' : 'border-gray-1'
                      } bg-white rounded-[10px]`}>
                      <div
                        className="absolute top-20 right-20 mobile:top-10 right-10 cursor-pointer"
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
                        className="mx-20 mobile:mx-10 w-20"
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
                        <div className="cursor-pointer w-20 h-20">
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
                        <div className="w-274 mobile:w-147 flex flex-col gap-y-8 mobile:w-">
                          <div className="text-15 text-black font-bold break-all line-clamp-2">
                            {item.title}
                          </div>
                          <span className="text-gray-3 whitespace-nowrap text-ellipsis overflow-hidden">
                            {item.author}
                          </span>
                          <div className="flex">
                            <BookRating rating={item.rating} />
                          </div>
                          <span className="text-14">[{item.genre}]</span>
                          <span className="text-14 text-color font-bold">
                            {item.price.toLocaleString()}원
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-full mt-120">
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
