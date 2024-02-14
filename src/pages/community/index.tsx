import { useGetCommunity } from '@/api/community';
import CommunityLayout from '@/components/layout/communityLayout';
import { communityCards } from '@/pages/api/mock';

function Community() {
  const data = useGetCommunity({});
  console.log(data)
  return <CommunityLayout communityData={communityCards} isSelected="피드" />;
}

export default Community;
