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
          className="h-[483px] w-[895px] bg-gray-1 mobile:h-[278px] mobile:w-[330px] tablet:h-[275px]
            tablet:w-[511px]">
          광고 넣을 곳!!!!!
        </div>
      </article>
      <Spacing height={[60, 40, 40]} />
      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <h1 className="text-20 text-black">신간도서 넣을 곳</h1>
        <div
          role="temp"
          className="h-[334px] w-[895px] bg-gray-1 mobile:h-[297px] mobile:w-[330px] tablet:h-[336px]
            tablet:w-[511px]"></div>
      </article>
      <Spacing height={[120, 80, 80]} />
      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <h1 className="text-20 text-black">베스트셀러 넣을 곳</h1>
        <div
          role="temp"
          className="h-[708px] w-[895px] bg-gray-1 mobile:h-[1735px] mobile:w-[330px]
            tablet:h-[1464px] tablet:w-[511px]"></div>
      </article>
      <Spacing height={[120, 80, 80]} />
      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <div className="flex items-center justify-between">
          <h1 className="text-20 text-black">모든 도서 넣을 곳</h1>
        </div>
        <div
          role="temp"
          className="h-[708px] w-[895px] bg-gray-1 mobile:h-[1735px] mobile:w-[330px]
            tablet:h-[1464px] tablet:w-[511px]"></div>
      </article>
    </SidebarLayout>
  );
}

export default CategoryPage;
