import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';
import CommunityCardList from '@/components/card/communityCard/communityCardList';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';
import { getCommunity } from '@/api/community';
import AddCommunityButton from '@/components/button/addcommunityButton';
import SkeletonCommunityCard from '@/components/skeleton/communityCard/skeleton';
import { SKELETON_COMMON_STYLE } from '@/constants/style/skeletonCommonStyle';

interface CommunityLayoutProps {
  isSelected: string;
  kebab?: boolean;
  memberId?: number;
}

function CommunityLayout({
  isSelected,
  kebab,
  memberId,
}: CommunityLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const { data, hasNextPage, isRefetching } = useCustomInfiniteQuery({
    endpoint: `${memberId ? `${memberId}` : ''}`,
    queryKey: ['community', `${memberId}`],
    queryFunc: getCommunity,
    initialCursorId: 0,
    limit: 12,
    cursorName: 'cursorId',
    getNextPageParamsFunc: (lastPage) =>
      lastPage.cursorId === -1 ? undefined : lastPage.cursorId,
    refetchTrigger: isIntersecting,
  });
  
  return (
    <MainLayout>
      <div className="mb-198 flex flex-col">
        {isRefetching ? (
          <>
            <div className="mb-40 mt-20 flex h-27 w-169 items-center justify-between mobile:mb-27 mobile:mt-6 tablet:mb-36 tablet:mt-16">
              <div className={`${SKELETON_COMMON_STYLE} w-40 h-27`}/>
              <div className={`${SKELETON_COMMON_STYLE} w-10 h-27`}/>
              <div className={`${SKELETON_COMMON_STYLE} w-70 h-27`}/>
            </div>
            <div className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2 mb-20">
              {Array.from({
                length: 6,
              }).map((_, index) => (
                <SkeletonCommunityCard key={index}/>
              ))}
            </div>
          </>
        ) : (
          <>
            <PageTab
            origin="피드"
            originHref="/community"
            add="내 글 보기"
            addHref="/community/writeme"
            isSelected={isSelected}
            />
            {//@ts-ignore
            <CommunityCardList communityData={data?.pages} kebab={kebab} />}
          </>
        )}
      </div>
      <AddCommunityButton />
      <div
        className={`h-5 w-300 ${hasNextPage ? 'block' : 'hidden'}`}
        ref={ref}/>
    </MainLayout>
  );
}

export default CommunityLayout;
