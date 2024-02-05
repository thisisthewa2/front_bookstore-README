import Link from 'next/link';
import RecommendationContent from '@/components/container/customSection/recommendationContent';

function NonSelectedCustomSection() {
  return (
    <div className="flex-col flex-center mobile:h-205 tablet:h-324 pc:h-482 bg-gray-1 w-full">
      <RecommendationContent />
      <Link
        className="flex-center w-256 h-50 text-green text-14 bg-white border border-green
          rounded-[5px]"
        href="/mypage/genre">
        선호 장르 선택하러 가기
      </Link>
    </div>
  );
}

export default NonSelectedCustomSection;
