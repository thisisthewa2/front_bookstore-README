import Image from 'next/image';
import CameraImageIcon from '@/public/icons/CameraImageIcon.svg';
import { FormProvider, useForm } from 'react-hook-form';
import { EditProfileType } from '@/types/editProfileTypes';
import { ChangeEvent, useRef, useState } from 'react';
import DefaultUserProfile from '@/public/images/DefaultUserProfile.png';
import { TextInput } from '../signInput/SignInput';

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
    initialProfileImageUrl,
  );

  const method = useForm<EditProfileType>({
    mode: 'onBlur',
    defaultValues: {
      ImageUrl: initialProfileImageUrl,
      nickname: initialProfileImageUrl,
    },
  });
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = method;

  const onSubmit = () => {
    setError('nickname', {
      type: 'manual',
      message: '닉네임은 3자 이상, 8자 이하로 지어주세요.',
    });
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

  const postProfileImage = async (imageFile: File) => {
    if (!imageFile) return;
    // 회원정보 api가 완성되면 post request를 보낼거에용
  };

  return (
    <FormProvider {...method}>
      <div className="w-440 h-745 bg-white border rounded-[10px] border-gray-4 mobile:border-none">
        <div className="flex-center mb-40">
          <h1 className="text-20 font-bold"> 프로필 수정</h1>
        </div>
        <form className="flex flex-col m-40" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mb-40">
            <label className="text-gray-7 text-16 font-bold text-left w-full">
              이메일
            </label>
            <TextInput
              id="email"
              placeholder={email}
              register={register}
              isRequired={false}
              pattern={/[a-z0-9]+@[a-z]+.[a-z]{2,3}/i}
              isError={errors.nickname}
              readOnly
            />
          </div>
          <div className="mb-40">
            <label className="text-gray-7 text-16 font-bold text-left w-full">
              닉네임
            </label>
            <p className="text-gray-4 text-15 text-left w-full">
              다른 유저와 중복되지 않는 닉네임
            </p>
            <TextInput
              id="nickname"
              placeholder={initialNickname}
              register={register}
              isRequired={true}
              pattern={/^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i}
              isError={errors.nickname}
            />
            {errors.nickname?.message && (
              <p className="text-14 text-red w-full text-left">
                {errors.nickname.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
export default EditProfile;
