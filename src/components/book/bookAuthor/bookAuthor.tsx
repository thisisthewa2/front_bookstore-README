/* string 배열형 author 값을 받아 author 리스트를 출력하는 컴포넌트
 */

interface BookAuthorProps {
  authorList?: string[] | null;
  publisher?: string;
  fontSize?: number;
}

function BookAuthor({ authorList, publisher, fontSize }: BookAuthorProps) {
  if (!authorList || authorList.length < 1) return;
  return (
    <div className="flex-center gap-4">
      {authorList.map((author) => {
        return (
          <span key={author} className="hover:text-gray-7 text-14 text-gray-3" style={{fontSize: fontSize ?? 14}}>
            {author}
          </span>
        );
      })}
      {publisher && <span className="text-14 text-gray-3">| {publisher}</span>}
    </div>
  );
}

export default BookAuthor;
