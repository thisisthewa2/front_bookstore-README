import RegisterButton from '@/components/button/register/registerButton';
import SignError from '@/components/errors/signError';
import {
  PasswordInput,
  TextInput,
} from '@/components/input/signInput/signInput';
import SocialCircle from '@/components/chip/socialCircle';
import TermsCheckbox from '@/components/container/terms/terms';
import { SignUpValueType } from '@/types/signType';
import {
  checkEmail,
  checkEmailValidation,
  checkMatchPasswordValidation,
  checkNickName,
  checkNickNameValidation,
  checkPassword,
  checkPasswordValidation,
} from '@/utils/checkSignInSignOut';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import useSignUpMutation from '@/hooks/useSignUpMutation';
import { SING_UP_TERMS_CONTENT } from '@/constants/termsContent';
import { notify } from '@/components/toast/toast';
import Logo from '@/public/icons/ReadmeLogo.svg';
import Image from 'next/image';

function SignUp() {
  const method = useForm<SignUpValueType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      repassword: '',
      nickname: '',
      selectAll: false,
    },
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = method;

  const { createMemberMutation } = useSignUpMutation();

  const onSubmit = (data: SignUpValueType) => {
    const { email, password, repassword, nickname, selectAll } = data;
    const checkValidataion = {
      email: checkEmailValidation(email),
      password: checkPasswordValidation(password),
      repassword: checkMatchPasswordValidation(password, repassword),
      nickname: checkNickNameValidation(nickname),
      selectAll: selectAll,
    };

    if (!checkValidataion.email) {
      setError('email', {
        type: 'manual',
        message: checkEmail.message,
      });
    }
    if (!checkValidataion.password) {
      setError('password', {
        type: 'manual',
        message: checkPassword.message,
      });
    }
    if (!checkValidataion.nickname) {
      setError('nickname', {
        type: 'manual',
        message: checkNickName.message,
      });
    }

    if (!checkValidataion.repassword) {
      setError('repassword', {
        type: 'manual',
        message: '비밀번호가 다릅니다',
      });
    }

    if (!checkValidataion.selectAll) {
      notify({ type: 'error', text: '약관동의를해주세요' });
    }

    const personData = {
      email: email,
      password: password,
      nickname: nickname,
    };

    const filterValidation = Object.values(checkValidataion).filter(
      (data) => data,
    );
    if (filterValidation.length === Object.values(checkValidataion).length) {
      createMemberMutation.mutate(personData);
    }
  };

  return (
    <FormProvider {...method}>
      <div className="flex-center min-h-dvh w-full bg-white">
        <div className="flex max-w-390 flex-1 flex-col items-center px-15">
          <p className="mb-40 mt-60 text-20 font-bold text-black">
            <Link href="/">
              <Image src={Logo} alt="logo" width={80} height={80} />
            </Link>
            <p className="mt-24">회원가입</p>
          </p>
          <div
            className="mb-40 flex h-125 w-full flex-col items-center justify-center
              rounded-[10px] border-2 border-solid border-gray-1 py-5 text-gray-3">
            <p className="mb-20 text-center text-12">
              SNS로 간편하게 로그인/회원가입
            </p>
            <div className="flex w-184 justify-between">
              <SocialCircle id="NAVER" width={36} height={36} />
              <SocialCircle id="KAKAO" width={24} height={22} />
              <SocialCircle id="GOOGLE" width={38} height={26} />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col">
            <fieldset>
              <label className="mb-12 inline-block w-full text-left text-16 font-bold">
                이메일
              </label>
              <TextInput
                id="email"
                placeholder="이메일"
                register={register}
                required={true}
                isError={errors.email}
              />
              <div className="mb-40 mt-8 text-left">
                <SignError errors={errors} id="email" />
              </div>
            </fieldset>
            <fieldset>
              <label className="w-full text-left text-16 font-bold text-black">
                비밀번호
              </label>
              <p className="mb-12 mt-4 w-full text-left text-15 text-gray-3">
                영문, 숫자를 포함한 8자 이상의 비밀번호
              </p>
              <PasswordInput
                id="password"
                placeholder="비밀번호"
                register={register}
                required={true}
                isError={errors.password}
              />
              <div className="mb-40 mt-8">
                <SignError errors={errors} id="password" />
              </div>
            </fieldset>
            <fieldset>
              <label className="mb-12 inline-block w-full text-left text-16 font-bold text-black">
                비밀번호확인
              </label>
              <PasswordInput
                id="repassword"
                placeholder="비밀번호확인"
                register={register}
                required={true}
                isError={errors.repassword}
              />
              <div className="mb-40 mt-8">
                <SignError errors={errors} id="repassword" />
              </div>
            </fieldset>
            <fieldset>
              <label className="w-full text-left text-16 font-bold">
                닉네임
              </label>
              <p className="mb-12 mt-4 w-full text-left text-15 text-gray-3">
                다른 유저와 중복되지 않는 닉네임
              </p>
              <TextInput
                id="nickname"
                placeholder="닉네임"
                register={register}
                required={true}
                isError={errors.nickname}
              />
              <div className="mb-40 mt-8">
                <SignError errors={errors} id="nickname" />
              </div>
            </fieldset>
            <fieldset className="mb-20">
              <TermsCheckbox
                title="약관동의"
                entire="전체동의"
                checkContent={[
                  SING_UP_TERMS_CONTENT.ageLimit,
                  SING_UP_TERMS_CONTENT.termsOfUse,
                  SING_UP_TERMS_CONTENT.userInformation,
                ]}
              />
            </fieldset>
            <RegisterButton>회원가입</RegisterButton>
          </form>
          <div className="mt-20 flex gap-x-4">
            <p className="text-gray-3">이미 아이디가 있으신가요?</p>
            <Link href="/signin" className="font-normal text-primary">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default SignUp;
