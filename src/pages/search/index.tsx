import { useRouter } from 'next/router';
import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import EventSection from '@/components/container/eventSection/eventSection';
import SearchBookList from '@/components/container/search/searchBookList';
import { useGetPageBook } from '@/api/book';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import { responsive } from '@/utils/checkResponsiveEnv';
function Search() {
  const router = useRouter();
  const { term } = router.query;

  const { data: bestList } = useGetPageBook({
    navigationMethod: 'PAGINATION',
    sortType: 'BESTSELLER',
    ascending: false,
    search: term?.toString(),
    enabled: term,
  });

  const { data: newestList } = useGetPageBook({
    navigationMethod: 'PAGINATION',
    sortType: 'BESTSELLER',
    ascending: false,
    search: term?.toString(),
    enabled: term,
  });

  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />
      <EventSection eventSize={'category'} />
      <Spacing height={[120, 80, 80]} />
      {newestList?.books ? (
        <CategoryCarousel data={newestList?.books} responsive={responsive} />
      ) : null}
      <Spacing height={[120, 80, 80]} />
      <BestSellerSection page="category" bookList={bestList?.books} />
      <Spacing height={[120, 80, 80]} />
      <SearchBookList term={term?.toString()} />
    </SidebarLayout>
  );
}

export default Search;
