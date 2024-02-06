import Link from 'next/link';
import RecommendationContent from './recommendationContent';

function NonLoggedInCustomSection() {
  return (
    <div className="flex-center w-full flex-col bg-gray-1 mobile:h-205 tablet:h-324 pc:h-482">
      <RecommendationContent />
      <Link
        className="flex-center h-50 w-256 rounded-[5px] border border-green bg-white text-14
          text-green"
        href="/signin">
        로그인하고 맞춤 도서 추천받기
      </Link>
    </div>
  );
}

export default NonLoggedInCustomSection;
