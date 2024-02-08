import { Signup, Login } from '@/types/api/member';
import { instance } from 'src/libs/instance';

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

//회원조회
export const getMember = async (id: number) => {
  const result = await instance.get(`/member/${id}`);
  return result.data;
};

//비밀번호 수정
export const putPassword = async (data: string) => {
  const result = await instance.put('/member/password', data);
  return result.data;
};

//프로필이미지 수정
export const putProfileImage = async (data: string) => {
  const result = await instance.put('/member/profile', data);
  return result.data;
};
