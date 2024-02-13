// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { useAtom } from 'jotai';

// import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
// import DropDown from '@/components/dropDown/dropDown';
// import { BOOK_OLDER_STANDARD } from 'src/constants/orderList';
// import useCarouselEnv from '@/hooks/useCarouselEnv';
// import { LocatedCategoryAtom } from '@/store/state';

// import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
// import { getBook } from '@/api/book';
// import useInfinite from '@/hooks/useInfinite';
// import { BookParams } from '@/types/api/book';

// const INITIAL_QUERYPARAMS = {
//   bookId: '1',
//   limit: '10',
//   sort: 'VIEW',
//   ascending: 'false',
// };

// function MainCategoryBookList() {
//   const [selectedOrder, setSelectedOrder] = useState('조회순');
//   const { env } = useCarouselEnv();
//   const [locatedCategory] = useAtom(LocatedCategoryAtom);
//   const [queryParams, setQueryParams] =
//     useState<BookParams>(INITIAL_QUERYPARAMS);
//   const [apiRef, isIntersecting] = useInfinite();

//   const { fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, data } =
//     useInfiniteQuery({
//       queryKey: [
//         selectedOrder,
//         locatedCategory.mainId,
//         'main-category-book-list',
//       ],
//       queryFn: ({ pageParam = 1 }) => {
//         return getBook({
//           endpoint: `${locatedCategory.mainId}/main`,
//           params: { ...queryParams, bookId: String(pageParam) },
//         });
//       },
//       getNextPageParam: (lastPage, allPages) =>
//         lastPage?.data.books.length <= 0 || lastPage?.data.cursorId < 0
//           ? undefined
//           : lastPage.data.books[lastPage.data.books.length - 1].bookId,
//       initialPageParam: 1,
//       select: (data) => (data.pages ?? []).flatMap((page) => page?.data?.books),
//     });

//   useEffect(() => {
//     if (isIntersecting && !isFetchingNextPage) {
//       fetchNextPage();
//       console.log(isIntersecting);
//     }
//   }, [isIntersecting]);

//   const onSelectedOrder = (menu: string) => {
//     setSelectedOrder(menu);
//     if (menu === '조회순')
//       setQueryParams((prev) => {
//         return { ...prev, sort: 'VIEW', ascending: 'false' };
//       });
//     if (menu === '신상품순')
//       setQueryParams((prev) => {
//         return { ...prev, sort: 'NEWEST', ascending: 'false' };
//       });
//     if (menu === '별점순')
//       setQueryParams((prev) => {
//         return { ...prev, sort: 'STAR', ascending: 'false' };
//       });
//     if (menu === '리뷰 많은순')
//       setQueryParams((prev) => {
//         return { ...prev, sort: 'REVIEW', ascending: 'false' };
//       });
//     if (menu === '낮은 가격순')
//       setQueryParams((prev) => {
//         return { ...prev, sort: 'PRICE', ascending: 'true' };
//       });
//     if (menu === '높은 가격순')
//       setQueryParams((prev) => {
//         return { ...prev, sort: 'PRICE', ascending: 'false' };
//       });
//   };

//   return (
//     <article className="relative flex h-fit flex-col gap-50 pb-30 mobile:gap-20 tablet:gap-40">
//       <div className="flex items-center justify-between">
//         <h1 className="text-20 text-black">모든 도서</h1>
//         <div className="z-20">
//           <DropDown
//             menus={BOOK_OLDER_STANDARD}
//             selectedItem={selectedOrder}
//             onSelectedItem={onSelectedOrder}
//           />
//         </div>
//       </div>

//       <div
//         className="grid h-fit w-[895px]
//            grid-flow-row auto-rows-auto grid-cols-5 gap-x-20 gap-y-40 mobile:w-[330px] mobile:grid-cols-2 mobile:gap-y-0 tablet:w-[511px] tablet:grid-cols-3 ">
//         {data?.map((book) => {
//           return (
//             <Link
//               href={`/bookdetail/${book.bookId}`}
//               key={book.bookId}
//               className="h-fit w-fit">
//               <PreviewBookInfo
//                 image={book.bookImgUrl ?? TestImage1}
//                 title={book.bookTitle}
//                 authorList={book.authors}
//                 price={book.price}
//                 size={env === 'desktop' ? 'md' : 'lg'}
//               />
//             </Link>
//           );
//         })}
//       </div>
//       {(isFetchingNextPage || isLoading || isIntersecting) && (
//         <div className="h-[300] w-full"></div>
//       )}
//       <div className="h-15 w-300" ref={apiRef} />
//     </article>
//   );
// }

// export default MainCategoryBookList;
