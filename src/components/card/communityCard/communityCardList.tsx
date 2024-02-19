import { CommunityPagesProps, CommunityCardsProps } from '@/types/communityCardType';
import CommunityCard from './communityCard';

interface CommunityCardListProps {
  communityData: CommunityPagesProps[];
  kebab?: boolean;
}

function CommunityCardList({ communityData, kebab }: CommunityCardListProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2">
      {communityData?.map((data, index) => {
        return (
          <div key={index}>
            {data?.cards.map((card : CommunityCardsProps) => {
              return (
                <CommunityCard
                  key={card?.bookInfo.bookId}
                  profileImg={card?.writer?.profileImg}
                  userNickname={card?.writer.nickname}
                  createAt={card?.createDate}
                  bookCover={card?.bookInfo.bookImgUrl}
                  bookTitle={card?.bookInfo.bookTitle}
                  review={card?.content}
                  kebab={kebab}
                />
              )
            })}
          </div>
        );
      })}
    </div>
  );
}
export default CommunityCardList;
