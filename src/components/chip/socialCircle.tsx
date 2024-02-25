import Image from 'next/image';
import { MouseEventHandler } from 'react';

import { SocialType, getSocialAuth } from '@/api/social';

import kakaoIcon from 'public/icons/KakaoIcon.svg';
import naverIcon from 'public/icons/NaverIcon.svg';
import googleIcon from 'public/icons/GoogleIcon.svg';

function SocialCircle({ id = 'KAKAO', width = 36, height = 36 }) {
  const handleSocialAuth: MouseEventHandler = (e) => {
    e.preventDefault();
    const { id } = e.target as HTMLButtonElement;
    const error = getSocialAuth(id as SocialType);
    console.log(error);
    /*
    TODO
      이후 성공하면 code 값 받아서 getSocialLogin(id) 로 get,
      실패하면 return 하는 api 처리 훅 짜기. 이때 useFetch 훅을 써서 onSuccess로 연결.
      그리고 getSocialLogin까지 성공하면 받은 토큰과 유저 데이터를 
      session에 저장하는 코드까지 짜고 확인하기
    */
  };

  return (
    <button
      id={id}
      onClick={handleSocialAuth}
      className="flex-center h-48 w-48 rounded-full border-2 border-solid border-gray-1">
      <Image
        id={id}
        src={
          id === 'GOOGLE' ? googleIcon : id === 'NAVER' ? naverIcon : kakaoIcon
        }
        width={width}
        height={height}
        className="flex-center relative"
        alt={id}
      />
    </button>
  );
}

export default SocialCircle;
