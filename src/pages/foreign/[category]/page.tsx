import { useRouter } from 'next/router';
export default function ForeignPage() {
  const router = useRouter();
  const { category } = router.query;

  return <p> 카테고리페이지: {category}</p>;
}
