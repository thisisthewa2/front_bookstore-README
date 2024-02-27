/* string 배열형 author 값을 받아 author 리스트를 출력하는 컴포넌트
 */
import useEditAuthorsName from '@/hooks/common/useEditAuthorsName';
interface BookAuthorProps {
  authorList?: string[] | null | string;
  publisher?: string;
  fontSize?: number;
  classNames?: string;
  isDetail?: boolean;
}

function BookAuthor({
  authorList,
  publisher,
  fontSize,
  classNames,
  isDetail,
}: BookAuthorProps) {
  let nameList = Array.isArray(authorList)
    ? authorList?.join(', ')
    : authorList;
  nameList += publisher ? ` | ${publisher}` : '';
  const authors = useEditAuthorsName({ authors: nameList, isDetail: isDetail });

  return (
    <div
      className={`${classNames ?? ``} text-14 text-gray-3`}
      style={{ fontSize: fontSize }}>
      {authors}
    </div>
  );
}

export default BookAuthor;
