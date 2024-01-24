import Image from 'next/image';
import CameraImageIcon from '@/public/icons/CameraImageIcon.svg';
import { useForm } from 'react-hook-form';
import { EditProfileType } from '@/types/editProfileTypes';
import { ChangeEvent, useRef, useState } from 'react';
import DefaultUserProfile from '@/public/images/DefaultUserProfile.png'

interface EditProfileProps {
  initialProfileImageUrl?: string | null;
  initialNickname?: string;
}

function EditProfile({initialProfileImageUrl,initialNickname} : EditProfileProps) {
  const imageUploaderRef = useRef<HTMLInputElement>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(initialProfileImageUrl);
  const [profilePreview, setProfilePreview] = useState<string | null>('/images/DefaultUserProfile.png')
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EditProfileType>({
    mode: 'onSubmit',
    defaultValues: {
      ImageUrl:'',
      nickname: '기존유저닉네임'
    },
  });

  const handleClickInput = () => {
    if (imageUploaderRef.current) {
      imageUploaderRef.current.click();
    }
  };

  const postProfileImage = async (imageFile: File | undefined) => {
    if (!imageFile) return;
    // 회원정보 api가 완성되면 post request를 보낼거에용
  };

  const handleImageChange = (file : File): Promise<void> => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            setProfilePreview(reader.result);
          }
          resolve();
        };
      });
    }
    return Promise.resolve();
  };

  return (
    <div className="w-440 h-745 bg-white border rounded-[10px] border-gray-4 mobile:border-none">
      <div className="flex-center mb-40">
        <h1 className="text-20 font-bold"> 프로필 수정</h1>
      </div>
      <form className="flex flex-col m-40">
        <div>
          <h2 className="font-bold mb-20">프로필 이미지</h2>
          <div>
            <div className="w-200 h-200 rounded-full bg-gray-2 relative cursor-pointer" onClick={handleClickInput}>
            <Image
                src={profilePreview|| DefaultUserProfile}
                alt="프로필 이미지"
                width={200}
                height={200}
                className="rounded-full"
              />
              <input type='file' className='hidden' ref={imageUploaderRef} onChange={(e) => {
          if (e.target.files) {
            handleImageChange(e.target.files[0]);
          }
        }}accept='image/*'/>
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
      </form>
    </div>
  );
}
export default EditProfile;
