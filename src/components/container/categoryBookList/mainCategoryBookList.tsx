import { useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";

import { getBook } from "@/api/book";
import PreviewBookInfo from "@/components/book/previewBookInfo/previewBookInfo";
import DropDown from "@/components/dropDown/dropDown";
import SkeletonPreviewBookInfo from "@/components/skeleton/previewBookInfo/skeleton";
import useCarouselEnv from "@/hooks/useCarouselEnv";
import useInfinite from "@/hooks/useInfinite";
import useCustomInfiniteQuery from "@/hooks/useCustomInfiniteQuery";
import { LocatedCategoryAtom } from "@/store/state";

import { BOOK_OLDER_STANDARD } from "src/constants/orderList";

const CURRENT_ORDER = {
  sort: "VIEW",
  ascending: false,
}

function MainCategoryBookList() {
  const { env } = useCarouselEnv();
  const [locatedCategory,] = useAtom(LocatedCategoryAtom);
  const [selectedOrder, setSelectedOrder] = useState("조회순");
  const [currentOrder, setCurrentOrder] = useState(CURRENT_ORDER);
  const [apiRef, isIntersecting] = useInfinite();

  const { data, isFetchingNextPage, hasNextPage } = useCustomInfiniteQuery({
    endpoint: `${locatedCategory.mainId}/main`,
    queryKey: [selectedOrder, String(locatedCategory.mainId), "main-category-book-list"],
    queryFunc: getBook,
    cursorName: "bookId",
    sort: currentOrder.sort,
    ascending: currentOrder.ascending,
    refetchTrigger: (isIntersecting),
    getNextPageParamsFunc:  (lastPage) =>  lastPage?.data.books.length <= 1 || lastPage?.data.cursorId <= 0 ? undefined : lastPage.data.books[lastPage.data.books.length - 1].bookId,
    selectFunc: (data) => {
      return (data.pages ?? []).flatMap(page => {
        if (page?.data?.books.length < 2) return page?.data?.books;
        return page?.data?.books.slice(0, page.data.books.length - 1)
      })
    },
  })

  const onSelectedOrder = (menu: string) => {
    setSelectedOrder(menu);
    if (menu === "조회순") setCurrentOrder((prev) => { return { ...prev, sort: "VIEW", ascending: false } });
    if (menu === "신상품순") setCurrentOrder((prev) => { return { ...prev, sort: "NEWEST", ascending: false } });
    if (menu === "별점순") setCurrentOrder((prev) => { return { ...prev, sort: "STAR", ascending: false } });
    if (menu === "리뷰 많은순") setCurrentOrder((prev) => { return { ...prev, sort: "REVIEW", ascending: false } });
    if (menu === "낮은 가격순") setCurrentOrder((prev) => { return { ...prev, sort: "PRICE", ascending: true } });
    if (menu === "높은 가격순") setCurrentOrder((prev) => { return { ...prev, sort: "PRICE", ascending: false } });
  }

  return (
      <article className="flex flex-col gap-50 relative h-fit mobile:gap-20 tablet:gap-40 pb-30">
        <div className="flex items-center justify-between">
          <h1 className="text-20 text-black">모든 도서</h1>
          <div className="z-20">
            <DropDown menus={BOOK_OLDER_STANDARD} selectedItem={selectedOrder} onSelectedItem={onSelectedOrder} />
          </div>
        </div>
      
        <div
          className="h-fit w-[895px] mobile:w-[330px]
           tablet:w-[511px] grid grid-flow-row grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 auto-rows-auto gap-x-20 gap-y-40 mobile:gap-y-0 ">
        {data?.map((book) => {
          return (
            <Link href={`/bookdetail/${book.bookId}`} key={book.bookId} className="w-fit h-fit">
            <PreviewBookInfo
              image={book.bookImgUrl}
              title={book.bookTitle}
              authorList={book.authors}
              price={book.price}
              size={env === "desktop"?"md" : "lg"}
              />
              </Link>
              )
        })}
        
      </div>
      {(isFetchingNextPage || isIntersecting) && 
        <div
          className="min-h-400 w-[895px] mobile:w-[330px]
           tablet:w-[511px] grid grid-flow-row grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 auto-rows-auto gap-x-20 gap-y-40 mobile:gap-y-0 ">          {[0, 1, 2].map(el => {
            return <SkeletonPreviewBookInfo key={el} />
          })
        }
        </div>
      }
        <div className={`h-5 w-300 ${hasNextPage ? "block" : "hidden"}`} ref={apiRef} ></div>

    </article>
  )}

export default MainCategoryBookList