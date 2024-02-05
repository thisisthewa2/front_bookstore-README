// import CarouselCard from '@/components/carousel/carouselCard';
// import useCarouselEnv from '@/hooks/useCarouselEnv';
// import { modalCarouselResponsive} from '@/utils/checkResponsiveEnv';
// import { inrange } from '@/utils/inrange';
// import registDragEvent from '@/utils/registerDragEvent';
// import Image from 'next/image';
// import { useEffect, useMemo, useRef, useState } from 'react';
// const CARD_MARGIN_VALUE = 20;

// const data = [
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2024/01/21/18/46/succulent-8523664_1280.jpg',
//       title: '책1',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_1280.jpg',
//       title: '책2',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg',
//       title: '책3',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2024/01/16/19/40/trees-8512979_1280.jpg',
//       title: '책4',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2024/01/13/00/46/raccoon-8504925_1280.png',
//       title: '책5',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
//       title: '책6',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
//       title: '책7',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
//       title: '책8',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
//       title: '책9',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
//       title: '마지막이다',
//       authorname: 'yuna',
//     },
//     {
//       imageUrl:
//         'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
//       title: '마지막2222222',
//       authorname: 'yuna',
//     },
//   ];


// function Carousel() {
//   const { env } = useCarouselEnv();
//   const CONTENT_WIDTH = modalCarouselResponsive[env]?.imageSize.width;

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);

//   const calcContentWidthValue = Math.floor(CONTENT_WIDTH + CARD_MARGIN_VALUE);

//   const transformCarousel = (currentIndex: number) => {
//     if (ref.current) {
//       ref.current.style.transform = `translateX(${currentIndex * (calcContentWidthValue * -1)}px)`;
//     }
//   };

//   let carouselElementWidth = ref.current?.clientWidth!;

//   const visibleItemsCount = useMemo(() => {
//     return Math.round(carouselElementWidth / calcContentWidthValue);
//   }, [carouselElementWidth, calcContentWidthValue]);

//   const maxPage = useMemo(() => {
//     return data.length - visibleItemsCount;
//   }, [data, visibleItemsCount]);

//   const prevBtn = () => {
//     if (currentIndex < 1) return;
//     const prevIndex = currentIndex - 1;
//     setCurrentIndex(prevIndex);
//     transformCarousel(prevIndex);
//   };
//   const nextBtn = () => {
//     if (currentIndex === maxPage) return;
//     const nextIndex = currentIndex + 1;
//     setCurrentIndex(nextIndex);
//     transformCarousel(nextIndex);
//   };

//   const resetCurrentIndex = () => {
//     setCurrentIndex(0);
//     transformCarousel(0);
//   };

//   const onDragEndTransform = (carouselIndex: number) => {
//     const boundaryIndex = inrange(carouselIndex, 0, maxPage);
//     setCurrentIndex(boundaryIndex);
//     transformCarousel(boundaryIndex);
//   };
//   useEffect(resetCurrentIndex, [env]);

//   return (
//     <div className="flex items-center justify-between w-[652px] mx-[-20px]">
//       <div onClick={prevBtn} className="w-10 h-16 mx-6 relative mobile:hidden cursor-pointer">
//         <Image
//           src={
//             currentIndex === 0
//               ? '/icons/CarouselLeftInActivateArrow.svg'
//               : '/icons/CarouselLeftActivateArrow.svg'
//           }
//           alt="왼쪽화살표"
//           fill
//         />
//       </div>
//       <div className="w-full h-283 flex justify-between overflow-x-hidden scroll-smooth">
//         <div
//           className="flex scroll-smooth transition-transform"
//           ref={ref}
//           {...registDragEvent({
//             onDragChange: (deltaX) => {
//               const boundaryDelta = inrange(
//                 deltaX,
//                 -calcContentWidthValue,
//                 calcContentWidthValue,
//               );
//               if (ref.current) {
//                 ref.current.style.transform = `translateX(${boundaryDelta + calcContentWidthValue * -currentIndex}px)`;
//               }
//             },
//             onDragEnd: (deltaX) => {
//               if (deltaX < 0) {
//                 onDragEndTransform(currentIndex + 1);
//               }
//               if (deltaX > 0) {
//                 onDragEndTransform(currentIndex - 1);
//               }
//             },
//           })}>
//           {data.map((item, index) => (
//             <CarouselCard key={index} {...item} env={env} />
//           ))}
//         </div>
//       </div>
//       <div onClick={nextBtn} className="w-10 h-16 mx-6 relative mobile:hidden">
//         <Image
//           src={
//             currentIndex === maxPage && maxPage !== 0
//               ? '/icons/CarouselRightInActivateArrow.svg'
//               : '/icons/CarouselRightActivateArrow.svg'
//           }
//           alt="오른쪽화살표"
//           fill
//         />
//       </div>
//     </div>
//   );
// }

// export default Carousel