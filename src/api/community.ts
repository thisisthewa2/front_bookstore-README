import { CommunityCard } from '@/types/api/community';
import { instance } from 'src/libs/instance';

//커뮤니티 글 전체조회, 내가쓴글 조회,
export const getCommunity = async (option: {
  id: number;
  params: { size: number; cursorId: number; search: string };
}) => {
  const { id, params } = option;
  const result = await instance.get('community', {
    params,
  });
  return result.data;
};

//글 등록
export const postCommunity = async (data: CommunityCard) => {
  const result = await instance.post('community', {
    data,
  });
  return result.data;
};

//글 삭제
export const deleteCommunity = async (id: number) => {
  const result = await instance.delete('community');
  return result.data;
};

//글 수정
export const putCommunity = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.put(`community/${id}`, {
    data,
  });
  return result.data;
};
