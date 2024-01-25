import { PasswordInput } from '@/components/signInput/SignInput';
import { EditPasswordType } from '@/types/editProfileTypes';
import { FormProvider, useForm } from 'react-hook-form';
import RegisterButton from '@/components/button/registerButton';

function EditPassword() {
  const method = useForm<EditPasswordType>({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      checkPassword: '',
    },
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = method;

  const PASSWORD_RULES = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i,
      message: '비밀번호는 영문, 숫자를 포함해 8자 이상으로 지어주세요.',
    },
    validate: (value: string | number) => {
      const passwordValue = getValues('password');
      return passwordValue === value || '비밀번호가 다릅니다';
    },
  };

  const onSubmit = () => {
    // 서버로 비밀번호를 보낼거에용
  };

  return (
    <FormProvider {...method}>
      <div
        className="max-w-440 max-h-745 bg-white border rounded-[10px] border-gray-1
          mobile:border-none p-40">
        <div className="flex-center mb-40">
          <h1 className="font-bold text-20">비밀번호 변경</h1>
        </div>
        <form
          className="flex flex-col gap-40 mobile:m-15"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-40">
            <div>
              <label className="text-black text-16 font-bold text-left w-full">
                비밀번호
              </label>
              <p className="text-gray-3 text-15 text-left w-full mb-12">
                영문, 숫자를 포함한 8자 이상의 비밀번호
              </p>
              <PasswordInput
                id="password"
                placeholder="비밀번호"
                register={register}
                requiredMessage={PASSWORD_RULES.required}
                pattern={{
                  value: PASSWORD_RULES.pattern.value,
                  message: PASSWORD_RULES.pattern.message,
                }}
                isError={errors.password}
              />
              {errors.password?.message && (
                <p className="text-14 text-red w-full text-left">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-black text-16 font-bold text-left w-full mb-12">
                비밀번호확인
              </label>
              <PasswordInput
                id="checkPassword"
                placeholder="비밀번호확인"
                register={register}
                requiredMessage={PASSWORD_RULES.required}
                isError={errors.checkPassword}
                validate={PASSWORD_RULES.validate}
              />
              {errors.checkPassword?.message && (
                <p className="text-14 text-red w-full text-left">
                  {errors.checkPassword.message}
                </p>
              )}
            </div>
          </div>
          <RegisterButton type="submit">비밀번호 변경</RegisterButton>
        </form>
      </div>
    </FormProvider>
  );
}

export default EditPassword;
