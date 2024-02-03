import { useRouter } from 'next/router';
import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';

function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <SidebarLayout isDomestic={false} location={category as string}>
      <Spacing height={[0, 0, 20]} />
      <article>
        <div
          role="temp"
          className="bg-gray-1 w-[895px] h-[483px] tablet:w-[511px] tablet:h-[275px] mobile:w-[330px]
            mobile:h-[278px]">
          광고 넣을 곳!!!!!
        </div>
      </article>
      <Spacing height={[60, 40, 40]} />
      <article className="flex flex-col gap-50 tablet:gap-40 mobile:gap-20">
        <h1 className="text-black text-20">신간도서 넣을 곳</h1>
        <div
          role="temp"
          className="bg-gray-1 w-[895px] h-[334px] tablet:w-[511px] tablet:h-[336px] mobile:w-[330px]
            mobile:h-[297px]"></div>
      </article>
      <Spacing height={[120, 80, 80]} />
      <article className="flex flex-col gap-50 tablet:gap-40 mobile:gap-20">
        <h1 className="text-black text-20">베스트셀러 넣을 곳</h1>
        <div
          role="temp"
          className="bg-gray-1 w-[895px] h-[708px] tablet:w-[511px] tablet:h-[1464px]
            mobile:w-[330px] mobile:h-[1735px]"></div>
      </article>
      <Spacing height={[120, 80, 80]} />
      <article className="flex flex-col gap-50 tablet:gap-40 mobile:gap-20">
        <div className="flex justify-between items-center">
          <h1 className="text-black text-20">모든 도서 넣을 곳</h1>
        </div>
        <div
          role="temp"
          className="bg-gray-1 w-[895px] h-[708px] tablet:w-[511px] tablet:h-[1464px]
            mobile:w-[330px] mobile:h-[1735px]"></div>
      </article>
    </SidebarLayout>
  );
}

export default CategoryPage;
