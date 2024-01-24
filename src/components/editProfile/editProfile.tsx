import Image from 'next/image';
import CameraImageIcon from '@/public/icons/CameraImageIcon.svg';
import { FormProvider, useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import DefaultUserProfile from '@/public/images/DefaultUserProfile.png';
import { TextInput } from '../signInput/SignInput';
import RegisterButton from '../button/registerButton';

interface EditProfileType {
  ImageUrl?: string | null;
  nickname: string;
}
interface EditProfileProps {
  initialProfileImageUrl?: string | null;
  initialNickname: string;
  email: string;
}

function EditProfile({
  initialProfileImageUrl,
  initialNickname,
  email,
}: EditProfileProps) {
  const imageUploaderRef = useRef<HTMLInputElement>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    initialProfileImageUrl || '',
  );
  const method = useForm<EditProfileType>({
    mode: 'onSubmit',
    defaultValues: {
      ImageUrl: initialProfileImageUrl,
      nickname: initialNickname,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = method;

  const onSubmit = () => {
    // profileImageUrl과 watch('ninckname')을  post 할거에용
  };

  const handleClickInput = () => {
    if (imageUploaderRef.current) {
      imageUploaderRef.current.click();
    }
  };

  const handleImageChange = (file: File): Promise<void> => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            setProfileImageUrl(reader.result);
          }
          resolve();
        };
      });
    }
    return Promise.resolve();
  };

  return (
    <FormProvider {...method}>
      <div
        className="max-w-440 max-h-745 bg-white border rounded-[10px] border-gray-1
          mobile:border-none">
        <div className="flex-center mb-40">
          <h1 className="text-20 font-bold"> 프로필 수정</h1>
        </div>
        <form
          className="flex flex-col m-40 gap-40 mobile:m-15"
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="font-bold mb-20">프로필 이미지</h2>
            <div>
              <div
                className="w-200 h-200 rounded-full bg-gray-2 relative cursor-pointer"
                onClick={handleClickInput}>
                <Image
                  src={profileImageUrl || DefaultUserProfile}
                  alt="프로필 이미지"
                  width={200}
                  height={200}
                  className="rounded-full max-w-200 max-h-200"
                />
                <input
                  type="file"
                  className="hidden"
                  ref={imageUploaderRef}
                  onChange={(e) => {
                    if (e.target.files) {
                      handleImageChange(e.target.files[0]);
                    }
                  }}
                  accept="image/*"
                />
                <Image
                  src={CameraImageIcon}
                  alt="카메라 이미지"
                  width={52}
                  height={52}
                  className="absolute bottom-1 right-1"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-gray-7 text-16 font-bold text-left w-full">
              이메일
            </label>
            <TextInput
              id="email"
              register={register}
              value={email}
              readOnly
              classNames="text-gray-2 focus:border-gray-3"
            />
          </div>
          <div>
            <label className="text-[#363636] text-16 font-bold text-left w-full">
              닉네임
            </label>
            <p className="text-[#767676] text-15 text-left w-full">
              다른 유저와 중복되지 않는 닉네임
            </p>
            <TextInput
              id="nickname"
              register={register}
              isRequired={true}
              pattern={{
                value: /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i,
                message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
              }}
              isError={errors.nickname}
              defaultValue={initialNickname}
            />
            {errors.nickname?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.nickname.message}
              </p>
            )}
          </div>
          <RegisterButton type="submit">회원정보 수정</RegisterButton>
        </form>
      </div>
    </FormProvider>
  );
}
export default EditProfile;
