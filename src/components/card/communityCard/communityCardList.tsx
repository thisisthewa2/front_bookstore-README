import { CommunityPagesProps, CommunityCardsProps } from '@/types/communityCardType';
import CommunityCard from './communityCard';

interface CommunityCardListProps {
  communityData: CommunityPagesProps[];
  kebab?: boolean;
}

function CommunityCardList({ communityData, kebab }: CommunityCardListProps) {
  return (
    <>
      {communityData?.map((data, index) => {
        return (
          <div
            key={index}
            className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2 mb-20">
            {data?.cards.map((card: CommunityCardsProps, index) => {
              return (
                <CommunityCard
                  key={index}
                  communityId={card.communityId}
                  profileImg={card?.writer?.profileImg}
                  userNickname={card?.writer.nickname}
                  createAt={card?.createDate.split('T')[0].replace(/-/g, '.')}
                  bookId={card?.bookInfo.bookId}
                  bookCover={card?.bookInfo.bookImgUrl}
                  bookTitle={card?.bookInfo.bookTitle}
                  review={card?.content}
                  kebab={kebab}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
export default CommunityCardList;
