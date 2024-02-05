/** 책의 카테고리 배열을 받아 이쁘게 표시해주는 서브 컴포넌트`
 *
 * @param {{categories: [string, string]}} param0
 */

function BookCategory({ categories }: { categories: [string, string] }) {
  return (
    <div className="text-16 text-gary-4">{`[${categories[0]}/${categories[1]}]`}</div>
  );
}

export default BookCategory;
