import { useRouter } from 'next/router';

function CategoryPage() {
  const router = useRouter();
  console.log(router.query);
  const { category } = router.query;

  return (
    <div>
      <h1>{category} 페이지</h1>
      {/* 이하에서 해당 카테고리에 대한 페이지 컨텐츠 표시 */}
    </div>
  );
}

export default CategoryPage;
