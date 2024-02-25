import { QUERY_KEY } from '@/constants/queryKey';
import { Signup, Login, ChangePassword } from '@/types/api/member';
import { useFetch, useUpdate, useUpdateType } from '@/utils/reactQuery';
import { instance, instanceFormData } from 'src/libs/instance';

//회원가입
export const postSignup = async (data: Signup) => {
  const result = await instance.post('/member', data);
  return result.data;
};

//로그인
export const postLogin = async (data: Login) => {
  const result = await instance.post('/member/sign-in', data);
  return result.data;
};

//회원조회 (id값 있으면 타인조회, 없으면 본인조회)
const getMember = async (id?: number) => {
  const result = await instance.get(`/member${id ? `/${id}` : ''}`);
  return result.data.data;
};

export const useGetMember = (id?: number) => {
  return useFetch(QUERY_KEY.member, getMember, id);
};

//비밀번호 수정
export const putPassword = async (newPassword: ChangePassword) => {
  const result = await instance.put('/member/password', newPassword);
  return result.data;
};

export const usePutPassword = (
  newPassword: ChangePassword,
  { onSuccess, onError, onSettled }: useUpdateType,
) => {
  return useUpdate(putPassword, newPassword, { onSuccess, onError, onSettled });
};

//프로필이미지, 닉네임 수정
const putProfile = async (data: FormData) => {
  const result = await instanceFormData.post('/member/profile', data);
  return result.data;
};

export const usePutProfile = (
  data: FormData,
  { onSuccess, onError, onSettled }: useUpdateType,
) => {
  return useUpdate(putProfile, data, { onSuccess, onError, onSettled });
};

// 선호장르 변경

const putCustomGenre = async (categories: number[]) => {
  const result = await instance.put('/member/categories', { categories });
  return result.data;
};

export const usePutCustomGenre = (
  categories: number[],
  { onSuccess, onError, onSettled }: useUpdateType,
) => {
  return useUpdate(putCustomGenre, categories, {
    onSuccess,
    onError,
    onSettled,
  });
};


// 나의 리뷰 조회
const getMyReviewList = async (id: number) => {
  const result = await instance.get(`/member/reviews`);
  return result.data.data;
};

export const useGetMyReviewList = (id: number) => {
  return useFetch(QUERY_KEY.member, getMyReviewList, id, id);
};