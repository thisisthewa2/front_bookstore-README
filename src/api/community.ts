import { QUERY_KEY } from '@/constants/queryKey';
import { FormData } from '@/hooks/useFormControl';
import { GetCommunityOption } from '@/types/api/community';
import { useDelete, useFetch, useUpdate } from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';

//커뮤니티 글 전체조회, 내가쓴글 조회,
export const getCommunity = async (option: GetCommunityOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(
    `community${endpoint ? `/${endpoint}` : ''}`,
    {
      params,
    },
  );
  return result.data.data;
};

export const useGetCommunity = (option: GetCommunityOption) => {
  return useFetch(QUERY_KEY.community, getCommunity, option);
};

//글 등록
const postCommunity = async (data: FormData) => {
  const result = await instance.post('community', {
    memberId: data.required,
    bookId: data.id,
    content: data.content,
  });
  return result.data;
};

export const usePostCommunity = (data: FormData) => {
  return useUpdate(postCommunity, data);
};

//글 삭제
const deleteCommunity = async (communityId?: number) => {
  const result = await instance.delete(`community/${communityId}`);
  return result.data;
};

export const useDeleteCommunity = (communityId?: number) => {
  return useDelete(deleteCommunity, communityId);
};

//글 수정
const putCommunity = async (putFormData: FormData) => {
  const { option, required, content } = putFormData;

  const result = await instance.put(`community/${option}`, {
    content,
    rating: required,
  });
  return result.data;
};

export const usePutCommunity = (putFormData: FormData) => {
  return useUpdate(putCommunity, putFormData);
};
