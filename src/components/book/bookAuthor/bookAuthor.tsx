/* string 배열형 author 값을 받아 author 리스트를 출력하는 컴포넌트
 */

interface BookAuthorProps {
  authorList?: string[] | null;
  publisher?: string;
  fontSize?: number;
}

function BookAuthor({ authorList, publisher, fontSize }: BookAuthorProps) {
  if (!authorList || authorList.length < 1) return;

  let nameList = authorList.join(', ');
  nameList += publisher ? ` | ${publisher}` : '';
  return (
    <div className="text-14 text-gray-3" style={{ fontSize: fontSize }}>
      {nameList}

    </div>
  );
}

export default BookAuthor;
