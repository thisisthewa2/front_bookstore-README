import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';
import RegisterButton from '@/components/button/register/registerButton';
import { useForm } from 'react-hook-form';

function AddCommunityCardForm() {
  const { register, watch, handleSubmit } = useForm({
    mode: 'onSubmit', defaultValues: {
      book: '',
      content: '',
    }
  });
  console.log(watch('book'))

  const onSubmit = () => {

  }

  return (
    <form className="flex flex-col w-full gap-40 mobile:gap-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full gap-12">
        <label htmlFor="book" className="text-16 text-b-b">
          도서
        </label>
        <div
          className="flex items-center justify-between w-full h-48 border border-gray-1 rounded-[5px]
            p-13">
          <input
            id="book"
            placeholder="책 제목, 작가 등을 검색해주세요"
            {...register("book")}
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
      <div className="flex flex-col w-full gap-12">
        <label htmlFor="content" className="text-16 text-b-b">
          내용
        </label>
        <textarea
          id="content"
          {...register("content", {required: true})}
          className="w-full h-101 resize-none border border-gray-1 rounded-[10px] px-20 py-15"
          placeholder="내용을 작성해주세요"></textarea>
      </div>
      <RegisterButton>글쓰기</RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
