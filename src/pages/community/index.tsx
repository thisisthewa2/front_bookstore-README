import CommunityLayout from '@/components/layout/communityLayout';
import { communityCards } from '@/pages/api/mock';

function Community() {
  return <CommunityLayout communityData={communityCards} isSelected="피드" />;
}

export default Community;
