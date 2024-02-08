/** 책의 카테고리 배열을 받아 이쁘게 표시해주는 서브 컴포넌트`
 *
 * @param {{categories: [string, string]}} param0
 */

interface BookCategoryProps {
  categories: [string, string];
  fontSize?: number;
}

function BookCategory({ categories, fontSize }: BookCategoryProps) {
  return (
    <div
      className="text-16 text-gray-4"
      style={{
        fontSize: fontSize ?? 16,
      }}>{`[${categories[0]}/${categories[1]}]`}</div>
  );
}

export default BookCategory;
