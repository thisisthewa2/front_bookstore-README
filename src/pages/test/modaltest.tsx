import AddCommunityCard from '@/components/modal/addCommunityCard';
import AddReview from '@/components/modal/addReview';
import AlertModal from '@/components/modal/alertModal';
import FindAddress from '@/components/modal/findAddress';
import GetRefund from '@/components/modal/getRefund';
import SkeletonCommunityCard from '@/components/skeleton/communityCard/skeleton';
import { useState } from 'react';

function ModalTest() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isAddCommunityCardModalOpen, setIsAddCommunityCardModalOpen] =
    useState(false);
  const [isGetRefundFormModalOpen, setIsGetRefundFormModalOpen] =
    useState(false);

  const handleReviewModalOpen = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  };

  const handleAlertModalOpen = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  const handleAddCommunityCardModalOpen = () => {
    setIsAddCommunityCardModalOpen(!isAddCommunityCardModalOpen);
  };

  const handleGetRefundFormModalOpen = () => {
    setIsGetRefundFormModalOpen(!isGetRefundFormModalOpen);
  };

  return (
    <div>
      <button
        onClick={handleReviewModalOpen}
        className="flex-center bg-primary h-50 w-full border border-black">
        리뷰 모달 열려라
      </button>
      {isReviewModalOpen && <AddReview onClick={handleReviewModalOpen} bookId={1} bookTitle='책이름' authors='작가' />}

      <button
        onClick={handleFindAddressModalOpen}
        className="flex-center bg-primary h-50 w-full border border-black">
        주소 검색하기 모달 열려라
      </button>
      {isFindAddressModalOpen && (
        <FindAddress onClick={handleFindAddressModalOpen} />
      )}

      <button
        onClick={handleAlertModalOpen}
        className="flex-center bg-primary h-50 w-full border border-black">
        삭제하기 모달 열려라
      </button>
      {isAlertModalOpen && (
        <AlertModal
          title="정말 삭제하시겠습니까?"
          description="삭제한 글은 복구할 수 없습니다."
          onClick={handleAlertModalOpen}
        />
      )}

      <button
        onClick={handleAddCommunityCardModalOpen}
        className="flex-center bg-primary h-50 w-full border border-black">
        커뮤니티 글쓰기 모달 열려라
      </button>
      {isAddCommunityCardModalOpen && (
        <AddCommunityCard onClick={handleAddCommunityCardModalOpen} />
      )}

      <button
        onClick={handleGetRefundFormModalOpen}
        className="flex-center bg-primary h-50 w-full border border-black">
        환불 모달 열려라
      </button>
      {isGetRefundFormModalOpen && (
        <GetRefund onClick={handleGetRefundFormModalOpen} bookTitle='책제목' authors='작가' deliveryId={999} />
      )}

      <SkeletonCommunityCard />
    </div>
  );
}

export default ModalTest;
