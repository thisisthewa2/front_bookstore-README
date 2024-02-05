import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import CustomSection from '@/components/container/customSection/customSection';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
function Home() {
  return (
    //메인페이지 각 컴포넌트 넣을자리에 div로 표시만 해둠
    <>
      <div
        className="bg-green h-480 w-[1080px] mt-40 mb-87 flex-center tablet:w-[688px] tablet:mb-80
          mobile:w-330 mobile:mb-20">
        div두개있는 젤 위에꺼
      </div>
      {/* <CustomSection isLoggedIn={false} isGenreSelected={false} /> */}
      {/* <CustomSection isLoggedIn={true} isGenreSelected={false} /> */}
      <CustomSection isLoggedIn={true} isGenreSelected={true} />
      <div className="bg-green h-[581px] w-[1200px] flex-center tablet:w-[688px] mobile:w-full">
        신간도서
      </div>
      <div className="bg-gray-3 h-[633px] w-[1200px] flex-center tablet:w-[688px] mobile:w-full">
        실시간 인기 도서
      </div>
      <BestSellerSection />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
