import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CheckIcon from '@/public/icons/CheckIcon.svg';
import RightArrowIcon from '@/public/icons/RightArrow.svg';
import TermsDetailModal from '@/components/modal/termsDetailModal/termsDetailModal';

interface TermsCheckboxProps {
  title?: string;
  entire: string;
  checkContent: { title: string; content: string }[];
  useFormContextProps?: boolean;
  onCheckedChange?: (checkedStates: boolean) => void;
}
interface CheckedStates {
  [key: string]: boolean;
}

function TermsCheckbox({
  title,
  entire,
  checkContent,
  useFormContextProps = true,
  onCheckedChange,
}: TermsCheckboxProps) {
  const formMethods = useFormContextProps ? useFormContext() : null;
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    title: '',
    content: '',
  });

  const [checkedStates, setCheckedStates] = useState<CheckedStates>(
    checkContent.reduce((acc, item) => ({ ...acc, [item.title]: false }), {}),
  );

  const handleSelectAll = (e: FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    setCheckedStates(
      checkContent.reduce(
        (acc, item) => ({ ...acc, [item.title]: isChecked }),
        {},
      ),
    );
  };

  const handleIndividualCheck = (termsTitle: string) => {
    setCheckedStates((prev) => ({ ...prev, [termsTitle]: !prev[termsTitle] }));
  };

  useEffect(() => {
    const isAllChecked = Object.values(checkedStates).every(Boolean);
    formMethods?.setValue('selectAll', isAllChecked);
    if (onCheckedChange) onCheckedChange(isAllChecked);
  }, [checkedStates, formMethods?.setValue]);

  return (
    <div className="w-full">
      {title && <span className="inline-block pb-8 font-bold">{title}</span>}
      <div className="relative flex h-48 items-center gap-8 border-0 border-b-[1px] border-b-gray-1">
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
            {...formMethods?.register('selectAll')}
            checked={Object.values(checkedStates).every(Boolean)}
            onChange={handleSelectAll}
            className="mt-0.5 relative float-left mr-8 h-20 w-20 appearance-none rounded-[2px] border-2 border-solid
              border-gray-3 p-1 checked:border-0 checked:bg-primary"
          />
          {entire}
        </label>
      </div>

      <div>
        {checkContent.map((item, index) => (
          <div
            key={item.title}
            className="flex h-48 items-center justify-between gap-5">
            <div className="relative flex items-center gap-8">
              <label
                htmlFor={`id.${item.title}`}
                className="text-15 text-[#767676]">
                <Image
                  src={CheckIcon}
                  alt="체크아이콘"
                  width={10}
                  height={6}
                  className="absolute left-5 top-7 z-10"
                />
                <input
                  id={`id.${item.title}`}
                  {...formMethods?.register(`id.${item.title}`)}
                  type="checkbox"
                  checked={checkedStates[item.title]}
                  onChange={() => handleIndividualCheck(item.title)}
                  className="mt-0.5 relative float-left mr-8 h-20 w-20 appearance-none rounded-[2px] border-2 border-solid
                    border-gray-3 p-1 checked:border-0 checked:bg-primary"
                />
                {item.title}
              </label>
            </div>
            {index > 0 && (
              <button
                className="pr-4"
                onClick={() =>
                  setIsModalOpen({
                    isOpen: true,
                    title: item.title,
                    content: item.content,
                  })
                }
                type="button">
                <Image
                  src={RightArrowIcon}
                  width={18}
                  height={18}
                  alt="약관내용 전체보기 버튼"
                />
              </button>
            )}
          </div>
        ))}
      </div>
      {isModalOpen.isOpen && (
        <TermsDetailModal
          title={isModalOpen.title}
          content={isModalOpen.content}
          onClick={() =>
            setIsModalOpen({ isOpen: false, title: '', content: '' })
          }
        />
      )}
    </div>
  );
}

export default TermsCheckbox;
