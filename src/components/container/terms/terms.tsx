import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CheckIcon from '@/public/icons/CheckIcon.svg';
import RightArrowIcon from '@/public/icons/RightArrow.svg';
import { TERMS_TITLES } from 'src/constants/sign';

interface CheckedStates {
  [key: string]: boolean;
}

function TermsCheckbox() {
  const { register, setValue } = useFormContext();

  const [checkedStates, setCheckedStates] = useState<CheckedStates>(
    TERMS_TITLES.reduce((acc, title) => ({ ...acc, [title]: false }), {}),
  );
  const handleSelectAll = (e: FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    setCheckedStates(
      TERMS_TITLES.reduce(
        (acc, termsTitle) => ({ ...acc, [termsTitle]: isChecked }),
        {},
      ),
    );
  };
  const handleIndividualCheck = (termsTitle: string) => {
    setCheckedStates((prev) => ({ ...prev, [termsTitle]: !prev[termsTitle] }));
  };

  const handleOpenModal = () => {
    //모달을 열거예용
  };

  useEffect(() => {
    const isAllChecked = Object.values(checkedStates).every(Boolean);
    setValue('selectAll', isAllChecked);
  }, [checkedStates, setValue]);

  return (
    <div className="w-360 mobile:w-330">
      <span className="inline-block pb-8 font-bold">약관동의</span>
      <div className="relative flex h-48 items-center gap-8 border-0 border-b-[1px] border-b-[#DBDBDB]">
        <label htmlFor="selectAll" className="font-medium text-15">
          <Image
            src={CheckIcon}
            alt="체크아이콘"
            width={10}
            height={6}
            className="absolute left-5 top-20 z-10"
          />
          <input
            type="checkbox"
            id="selectAll"
            {...register('selectAll')}
            checked={Object.values(checkedStates).every(Boolean)}
            onChange={handleSelectAll}
            className="mt-0.5 relative float-left mr-8 h-20 w-20 appearance-none rounded-full border-2 border-solid
              border-gray-3 p-1 checked:border-0 checked:bg-green"
          />
          전체 동의
        </label>
      </div>

      <div>
        {TERMS_TITLES.map((termsTitle) => (
          <div
            key={termsTitle}
            className="flex h-48 items-center justify-between">
            <div className="relative flex items-center">
              <label
                htmlFor={`id.${termsTitle}`}
                className="text-15 text-[#767676]">
                <Image
                  src={CheckIcon}
                  alt="체크아이콘"
                  width={10}
                  height={6}
                  className="absolute left-5 top-7 z-10"
                />
                <input
                  id={`id.${termsTitle}`}
                  {...register(`id.${termsTitle}`)}
                  type="checkbox"
                  checked={checkedStates[termsTitle]}
                  onChange={() => handleIndividualCheck(termsTitle)}
                  className="mt-0.5 relative float-left mr-8 h-20 w-20 appearance-none rounded-full border-2 border-solid
                    border-gray-3 p-1 checked:border-0 checked:bg-green"
                />
                {termsTitle}
              </label>
            </div>
            <button className="pr-4" onClick={handleOpenModal}>
              <Image
                src={RightArrowIcon}
                width={18}
                height={18}
                alt="약관내용 전체보기 버튼"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsCheckbox;
