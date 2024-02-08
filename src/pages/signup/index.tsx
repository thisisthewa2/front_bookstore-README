import RegisterButton from '@/components/button/register/registerButton';
import SignError from '@/components/errors/signError';
import {
  PasswordInput,
  TextInput,
} from '@/components/input/signInput/signInput';
import SocialCircle from '@/components/chip/socialCircle';
import TermsCheckbox from '@/components/container/terms/terms';
import { SignUpValueType, SignValueType } from '@/types/signType';
import {
  checkEmail,
  checkNickName,
  checkPassword,
} from '@/utils/checkSignInSignOut';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

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

  const onSubmit = (data: SignUpValueType) => {
    const { email, password, repassword, nickname, selectAll } = data;
    if (!checkEmail.value.test(email)) {
      setError('email', {
        type: 'manual',
        message: checkEmail.message,
      });
    }
    if (!checkPassword.value.test(password)) {
      setError('password', {
        type: 'manual',
        message: checkPassword.message,
      });
    }

    if (!checkNickName.value.test(nickname)) {
      setError('nickname', {
        type: 'manual',
        message: checkNickName.message,
      });
    }
    if (password !== repassword) {
      setError('repassword', {
        type: 'manual',
        message: '비밀번호가 다릅니다',
      });
    }
    if (!selectAll) return;
  };

  return (
    <FormProvider {...method}>
      <div className="flex-center min-h-dvh w-full bg-white">
        <div className="flex max-w-390 flex-1 flex-col items-center px-15">
          <div className="flex-center mb-77 h-64">
            <p className="font-Inter text-24 font-bold text-green">Read Me</p>
          </div>
          <p className="mb-40 text-20 font-bold text-black">회원가입</p>
          <div
            className="mb-40 flex h-125 w-full flex-col items-center justify-center
              rounded-[10px] border-2 border-solid border-gray-1 py-5 text-gray-3">
            <p className="mb-20 text-center text-12">
              SNS로 간편하게 로그인/회원가입
            </p>
            <div className="flex w-184 justify-between">
              <SocialCircle />
              <SocialCircle />
              <SocialCircle />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col">
            <fieldset>
              <label className="text-gray-6 mb-12 inline-block w-full text-left text-16 font-bold">
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
              <label className="text-gray-6 w-full text-left text-16 font-bold">
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
              <TermsCheckbox />
            </fieldset>
            <RegisterButton>회원가입</RegisterButton>
          </form>
          <div className="mt-20 flex gap-x-4">
            <p className="text-gray-3">이미 아이디가 있으신가요?</p>
            <Link href="/signin" className="font-normal text-green">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default SignUp;
