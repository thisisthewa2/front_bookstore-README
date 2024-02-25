import { instance } from 'src/libs/instance';

export type SocialType = "KAKAO" | "NAVER" | "GOOGLE";

// 소셜 auth api
export const getSocialAuth = async (socialType: SocialType) => {
  try {
    const result = await instance.get(`social/auth/${socialType}`);
    return result;
  } catch (e) {
    return e;
  }
};

export const getSocialLogin = async (socialType: SocialType, code: string) => {
  const result = await instance.get(`social/login/${socialType}?code=${code}`);
  return result.data;
};
