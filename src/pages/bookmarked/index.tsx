import { getBookMarkList } from '@/api/bookmark';
import BookRating from '@/components/book/bookRating/bookRating';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import MainLayout from '@/components/layout/mainLayout';
import useInfinite from '@/hooks/useInfinite';
import { myWishListData } from '@/pages/api/wishMock';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';  
const USER_ID = 3
const OFFSET = 1
const LIMIT = 10
type WishListData = {
  id: number;
  image: string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  price: number;
};
  // const { data, isLoading } = useQuery<ColumnsType>({
  //   queryKey: ['getColumns', boardId],
  //   queryFn: () => getColumns(boardId),
  //   enabled: !!boardId,
  //   retry: 1,
// })
  


function fetchNextData(start: number, end: number) {
  const dataByScreen = myWishListData.wishListArray.slice(start, end);
  return dataByScreen;
}
const START = 0;
function BookMarkedPage() {
  // const bookMarkQuery = useQuery({
  // queryKey: ['bookMarkUserId', USER_ID], 
  //   queryFn: () => getBookMarkList(USER_ID, OFFSET, LIMIT),     
  // enabled:!!USER_ID
  // })
  
  // lastPage는 useInfiniteQuery를 이용해 호출된 가장 마지막에 있는 페이지 데이터를 의미합니다.
  // allPages는 useInfiniteQuery를 이용해 호출된 모든 페이지 데이터를 의미합니다.
  const {
    data,
    isLoading,
    status, 
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,  
} = useInfiniteQuery({
  queryKey: ['bookMarkUserId', USER_ID], 
  queryFn: ({pageParam = OFFSET}) => getBookMarkList(USER_ID, pageParam, LIMIT),  
  getNextPageParam: (lastPage, allPages, lastPageParam) => lastPage.nextCursor,
  initialPageParam: 0, 
  select: (data) => {
    return data.pages[0].data
  }
})
//
// {cursorId: -1, memberId: 3, total: 0, limit: 50, bookmarks: Array(0)}  data 


  // console.log(data)

  const [end, setEnd] = useState(8);
  const [wishListData, setWishListData] = useState(
    () => fetchNextData(START, end) || [],
  );
  const [ref, isIntersecting] = useInfinite();
  // console.log("꿔리",bookMarkQuery.data.data.bookmarks)
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
          <div className="flex flex-col px-60 mobile:px-15 tablet:px-40">
            <div className="text-black text-20 font-bold">
              찜목록({wishListData.length})
            </div>
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
                        const filteredWishListData = filteredDataByNotTargetId(
                          wishListData,
                          item.id,
                        );
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
          </div>
        </MainLayout>
      </div>
      <div ref={ref} />
    </div>
  );
}

export default BookMarkedPage;
