import { useRouter } from 'next/router';

import MainLayout from '@/components/layout/mainLayout';
import BookDetailCard from '@/components/card/bookDetailCard/bookDetailCard';
import BookDetailNav from '@/components/button/bookDetailNav';
import { BookDetailMock1 } from '../api/mock/bookDetailMock';
import { useState } from 'react';
import { BookDetailNavLocationType } from '@/types/bookDetailtype';
import RefundTerm from '@/components/container/refundTerm/refundTerm';
import BookInformation from '@/components/book/bookInformation/bookInformation';
import Review from '@/components/review/review';
import Spacing from '@/components/container/spacing/spacing';
import SideOrderNavigator from '@/components/orderNavigator/sideOrderNavigator';
import FooterOrderNavitgator from '@/components/orderNavigator/footerOrderNavitgator';

export default function BookDetailPage() {
  const router = useRouter();
  const { bookId } = router.query;
  // 페이지 하단 상품정보, 리뷰, 배송교환환불 탭을 나타내는 state
  const [location, setLocation] =
    useState<BookDetailNavLocationType>('information');
  // 책 구매 수량 state
  const [orderCount, setOrderCount] = useState(1);

  return (
    <MainLayout>
        <section className="flex flex-col w-full p-40 mobile:p-19 mobile:flex-center">
          <BookDetailCard
            bookId={bookId as string}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
          />
        </section>
        <Spacing height={[80, 80, 40]} />
        <BookDetailNav
          reviewNum={BookDetailMock1.reviewNum}
          location={location}
          setLocation={setLocation}
        />
        <div className="flex flex-col w-full">
          <section
            className="flex p-40 justify-start gap-30 pt-120 mobile:p-19 mobile:pt-40
              mobile:flex-center">
            <div className="flex flex-col w-full max-w-[710px] mobile:flex-center">
              {location === 'information' && <BookInformation />}
              {location === 'review' && <Review bookId={bookId as string} />}
              {location === 'currency' && <RefundTerm />}
            </div>
            <div className="pc:pt-50 pc:flex hidden">
              <SideOrderNavigator
                isBookmarked={BookDetailMock1.isBookmarked}
                price={BookDetailMock1.price}
                bookId={bookId as string}
                orderCount={orderCount}
                setOrderCount={setOrderCount}
              />
            </div>
          </section>
          <FooterOrderNavitgator
            isBookmarked={BookDetailMock1.isBookmarked}
            price={BookDetailMock1.price}
            bookId={bookId as string}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
          />
        </div>
      </MainLayout>
  );
}
