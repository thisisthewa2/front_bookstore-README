import RegisterButton from '@/components/button/register/registerButton';
import useFormControl from '@/hooks/useFormControl';
import ModalSearchInput from '@/components/input/modalSearchInput';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { CurrentPageStateAtom, chooseBookIdAtom } from '@/store/state';
import PreviewBookInfoPagination from '@/components/modal/addCommunityCard/previewBookInfoPagination';
import Input from '@/components/input/input';
import NoData from './noData';
import { usePostCommunity, usePutCommunity } from '@/api/community';
import { useSession } from 'next-auth/react';
import { AddCommunityCardProps } from '.';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { useGetBook } from '@/api/book';

function AddCommunityCardForm({
  onClick,
  edit,
  communityId,
  bookId,
  review,
}: AddCommunityCardProps) {
  const { data: session } = useSession();
  const [chooseBookId] = useAtom(chooseBookIdAtom);
  const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl({
    postFn: usePostCommunity,
    putFn: usePutCommunity,
    edit: edit,
    bookId: chooseBookId,
    option: { required: session?.memberId, optional: communityId },
    onClick: onClick,
    initialValue: { content: review },
  });
  const [search, setSearch] = useState('');
  const [_, setCurrentPage] = useAtom(CurrentPageStateAtom);

  const { data: chooseBookData } = useGetBook({
    endpoint: String(bookId),
    params: {},
    enabled: bookId,
  });

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <form
      className="flex w-full flex-col gap-40 overflow-scroll mobile:gap-20"
      onSubmit={handleSubmit(onSubmit)}>
      <ModalSearchInput
        placeholder="책 제목, 작가 등을 검색해주세요"
        onSearch={handleSearch}
      />
      <div className="flex-center h-323 w-full flex-col gap-22 mobile:h-330 ">
        {search ? (
          <PreviewBookInfoPagination search={search} />
        ) : (
          !edit && <NoData />
        )}
        {edit && chooseBookData && (
          <div className="flex w-full justify-start">
            <PreviewBookInfo
              size="xs"
              image={chooseBookData.data.bookImgUrl}
              title={chooseBookData.data.bookTitle}
              authorList={chooseBookData.data.authors}
              community={true}
            />
          </div>
        )}
      </div>
      <Input
        type="text"
        title="내용"
        height="h-100"
        control={control}
        name="content"
      />
      <RegisterButton type="submit" disabled={isButtonActive ? true : false}>
        {edit ? '수정하기' : '글쓰기'}
      </RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
