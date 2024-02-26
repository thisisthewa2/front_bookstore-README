import RegisterButton from '@/components/button/register/registerButton';
import SignError from '@/components/errors/signError';
import {
  PasswordInput,
  TextInput,
} from '@/components/input/signInput/signInput';
import { SignValueType } from '@/types/signType';
import { checkEmail } from '@/utils/checkSignInSignOut';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import SocialCircle from '@/components/chip/socialCircle';
import Logo from '@/public/icons/ReadmeLogo.svg';
function SignIn() {
  const [isClick, setIsClick] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignValueType>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    const result = await signIn('signin-credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    });
    if (result?.status === 401) {
      setError('password', {
        type: 'manual',
        message: '아이디나 비밀번호가 일치하지 않습니다.',
      });
    }
    if (result?.url && typeof window !== 'undefined') {
      window.location.href = result.url;
    }
  };

  return (
    <div className="flex-center min-h-dvh w-full bg-white">
      <div className="flex max-w-300 flex-1 flex-col items-center">
        <Link href="/" className="mb-40">
          <Image src={Logo} alt="logo" width={80} height={80} />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <fieldset>
            <TextInput
              id="email"
              placeholder="이메일"
              register={register}
              required={true}
              pattern={checkEmail}
            />
          </fieldset>
          <fieldset>
            <PasswordInput
              id="password"
              placeholder="비밀번호"
              register={register}
              required={true}
              isError={errors.password}
            />
            <div className="mb-20 mt-4 h-20 w-full">
              <SignError errors={errors} id="password" />
            </div>
          </fieldset>
          <div className="flex w-full">
            <input
              id="loginSaved"
              type="checkbox"
              className="invisible h-1 w-1"
            />
            <label htmlFor="loginSaved " className="flex-center mb-40 gap-x-8">
              <div
                onClick={() => setIsClick(!isClick)}
                className={`flex-center ${isClick ? 'bg-primary' : ''} h-20 w-20 cursor-pointer rounded-full
                  border-2 border-solid border-gray-1`}>
                {isClick && (
                  <Image
                    alt="체크아이콘"
                    src="/icons/CheckIcon.svg"
                    width={10}
                    height={7}
                  />
                )}
              </div>
              <p className="text-15 font-normal text-black">로그인 상태 유지</p>
            </label>
          </div>
          <RegisterButton>로그인</RegisterButton>
        </form>
        <div className="mb-40 mt-20 flex gap-x-4">
          <p className="text-gray-3">아이디가 없으신가요?</p>
          <Link href="/signup" className="font-normal text-primary">
            회원가입
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-20 text-center text-12 font-normal text-gray-3">
            SNS로 로그인/회원가입
          </p>
          <div className="flex w-184 justify-between">
            <SocialCircle id="NAVER" width={36} height={36} />
            <SocialCircle id="KAKAO" width={24} height={22} />
            <SocialCircle id="GOOGLE" width={38} height={26} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
