import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';
import RegisterButton from '@/components/button/register/registerButton';
import { useForm } from 'react-hook-form';

function AddCommunityCardForm() {
  const { register, watch, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      book: '',
      content: '',
    },
  });
  console.log(watch('book'));

  const onSubmit = () => {};

  return (
    <form
      className="flex w-full flex-col gap-40 mobile:gap-20"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-12">
        <label htmlFor="book" className="text-b-b text-16">
          도서
        </label>
        <div
          className="flex h-48 w-full items-center justify-between rounded-[5px] border border-gray-1
            p-13">
          <input
            id="book"
            placeholder="책 제목, 작가 등을 검색해주세요"
            {...register('book')}
            className="flex grow"></input>
          <Image
            src={SearchIcon}
            alt="검색"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* {watch('book') ? <Carousel /> : <div className='flex-center w-[608px] h-283'>검색 결과가 없어요</div>} */}
      <div className="flex w-full flex-col gap-12">
        <label htmlFor="content" className="text-b-b text-16">
          내용
        </label>
        <textarea
          id="content"
          {...register('content', { required: true })}
          className="h-101 w-full resize-none rounded-[10px] border border-gray-1 px-20 py-15"
          placeholder="내용을 작성해주세요"></textarea>
      </div>
      <RegisterButton>글쓰기</RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
