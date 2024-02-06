import CommunityCard from '@/components/card/communityCard/communityCard';
import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';
import { CommunityCardProps } from '@/types/communityCardType';

interface CommunityLayoutProps {
  communityData: CommunityCardProps[];
  isSelected: string;
  kebab?: boolean;
}

//TODO : api나오면 useInfiniteQuery에서 data받아서 infinityscroll구현
function CommunityLayout({
  communityData,
  isSelected,
  kebab,
}: CommunityLayoutProps) {
  return (
    <MainLayout>
      <div className="mb-198 flex flex-col">
        <PageTab
          origin="피드"
          originHref="/community"
          add="내 글 보기"
          addHref="/community/writeme"
          isSelected={isSelected}
        />
        <div className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2">
          {communityData.map((card) => (
            <CommunityCard
              key={card.id}
              profileImg={card.profileImg}
              userNickname={card.userNickname}
              createAt={card.createAt}
              bookCover={card.bookCover}
              bookTitle={card.bookTitle}
              review={card.review}
              kebab={kebab}
            />
          ))}
        </div>
        {/* <div className='h-100 w-300 border border-1 border-red' ref={ref}/> */}
      </div>
    </MainLayout>
  );
}

export default CommunityLayout;
