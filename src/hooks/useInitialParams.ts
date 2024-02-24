import { BookParams, Sort } from '@/types/api/book';
const INITIAL_LIMIT = '100';
const INITIAL_ASCENDING = false;

const useInitialBestNewestParams = ({ sort }: Sort) => {
  const INITIAL_PARAMS = {
    limit: INITIAL_LIMIT,
    sort: sort,
    ascending: INITIAL_ASCENDING,
  };
  return INITIAL_PARAMS;
};

const useCategoryCarouselParams = () => {
  const INITIAL_PARAMS: BookParams = {
    bookId: "0",
    limit: "15",
    sort: "NEWEST",
    ascending: false,
  }
  return INITIAL_PARAMS;
}

export { useInitialBestNewestParams, useCategoryCarouselParams };
