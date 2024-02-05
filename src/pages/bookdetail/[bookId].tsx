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

export default function BookDetailPage() {
  const router = useRouter();
  const { bookId } = router.query;
  const [location, setLocation] =
    useState<BookDetailNavLocationType>('information');

  return (
    <MainLayout>
      <section className="flex flex-col w-full p-40 mobile:p-19 mobile:flex-center">
        <BookDetailCard bookId={bookId as string} />
      </section>
      <Spacing height={[80, 80, 40]} />
      <BookDetailNav
        reviewNum={BookDetailMock1.reviewNum}
        location={location}
        setLocation={setLocation}
      />
      <div className="flex flex-col w-full">
        <section className="flex w-full p-40 pt-120 mobile:p-19 mobile:pt-40 mobile:flex-center">
          <div className="flex flex-col w-full mobile:flex-center">
            {location === 'information' && <BookInformation />}
            {location === 'review' && <Review bookId={bookId as string} />}
            {location === 'currency' && <RefundTerm />}
          </div>
          <div className="pc:pt-50 pc:flex hidden">
            <div
              className="bg-red mt-auto pc:w-340 pc:h-164 pc:sticky pc:bottom-80 pc:right-60 z-50
                bottom-0 left-0 right-0 w-full h-70">
              스티키 컴포넌트
            </div>
          </div>
        </section>
        <div className="pc:hidden flex w-full bg-gray-3 sticky bottom-0 h-70 z-10">
          타블렛 모바일 환경 스티키 배송구매 버튼
        </div>
      </div>
    </MainLayout>
  );
}
