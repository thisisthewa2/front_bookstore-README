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
      <section className="mobile:flex-center flex w-full flex-col p-40 mobile:p-19">
        <BookDetailCard bookId={bookId as string} />
      </section>
      <Spacing height={[80, 80, 40]} />
      <BookDetailNav
        reviewNum={BookDetailMock1.reviewNum}
        location={location}
        setLocation={setLocation}
      />
      <div className="flex w-full flex-col">
        <section className="mobile:flex-center flex w-full p-40 pt-120 mobile:p-19 mobile:pt-40">
          <div className="mobile:flex-center flex w-full flex-col">
            {location === 'information' && <BookInformation />}
            {location === 'review' && <Review bookId={bookId as string} />}
            {location === 'currency' && <RefundTerm />}
          </div>
          <div className="hidden pc:flex pc:pt-50">
            <div
              className="bottom-0 left-0 right-0 z-50 mt-auto h-70 w-full bg-red
                pc:sticky pc:bottom-80 pc:right-60 pc:h-164 pc:w-340">
              스티키 컴포넌트
            </div>
          </div>
        </section>
        <div className="sticky bottom-0 z-10 flex h-70 w-full bg-gray-3 pc:hidden">
          타블렛 모바일 환경 스티키 배송구매 버튼
        </div>
      </div>
    </MainLayout>
  );
}
