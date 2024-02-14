import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

import PreviewBookInfo from "@/components/book/previewBookInfo/previewBookInfo";
import DropDown from "@/components/dropDown/dropDown";
import { BOOK_OLDER_STANDARD } from "src/constants/orderList";
import useCarouselEnv from "@/hooks/useCarouselEnv";
import useGetCategoryId from "@/hooks/useGetCategoryId";
import { LocatedCategoryAtom } from "@/store/state";

import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import { DomesticBookList } from "@/pages/api/mock/domesticBookListMock";

function SubCategoryBookList() {
  const [selectedOrder, setSelectedOrder] = useState("조회순");
  const { env } = useCarouselEnv();
  const [locatedCategory,] = useAtom(LocatedCategoryAtom);
  const searchId = useGetCategoryId(locatedCategory.mainId, locatedCategory.subId ?? 0);
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: [searchId, "sub-category-page-books"],
  // }) 

  const onSelectedOrder = (menu: string) => {
    setSelectedOrder(menu);
  }

  return (
      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <div className="flex items-center justify-between">
          <h1 className="text-20 text-black">모든 도서</h1>
          <div className="z-20">
            <DropDown menus={BOOK_OLDER_STANDARD} selectedItem={selectedOrder} onSelectedItem={onSelectedOrder} />
          </div>
        </div>
      
        <div
          className="h-[708px] w-[895px] mobile:h-[1735px] mobile:w-[330px]
          tablet:h-[1464px] tablet:w-[511px] grid grid-flow-row grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 auto-rows-auto gap-x-20 gap-y-40 mobile:gap-y-0 ">
        {DomesticBookList.map((book) => {
          return (
            <Link href={`/bookdetail/${book.bookId}`} key={book.bookId} className="w-fit h-fit">
            <PreviewBookInfo
              image={book.imageUrl ?? TestImage1}
              title={book.title}
              authorList={book.authors}
              price={book.price}
              size={env === "desktop"?"md" : "lg"}
              />
              </Link>
              )
        })}
        
          </div>
    </article>
  )}

export default SubCategoryBookList