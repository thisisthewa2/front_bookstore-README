import { PasswordInput } from '@/components/signInput/SignInput';
import { EditPasswordProps, EditPasswordType } from '@/types/editProfileTypes';
import { FormProvider, useForm } from 'react-hook-form';

function EditPassword({ initialPassword }: EditPasswordProps) {
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
    formState: { errors },
  } = method;

  const onSubmit = () => {
    // 비밀번호를 post 보낼거에용
  };

  return (
    <FormProvider {...method}>
      <div
        className="max-w-440 max-h-745 bg-white border rounded-[10px] border-gray-1
          mobile:border-none">
        <div>
          <h1>비밀번호 변경</h1>
        </div>
        <form
          className="flex flex-col m-40 gap-40 mobile:m-15"
          onSubmit={handleSubmit(onSubmit)}>
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
              isRequired={true}
              pattern={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i}
              isError={errors.password}
            />
            {errors.password?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.password.message}
              </p>
            )}
            <label className="text-black text-16 font-bold text-left w-full mb-12">
              비밀번호확인
            </label>
            <PasswordInput
              id="checkPassword"
              placeholder="비밀번호확인"
              register={register}
              isRequired={true}
              isError={errors.checkPassword}
            />
            {errors.checkPassword?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.checkPassword.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default EditPassword;
