import { getBook } from '@/api/book';
import { BookParams } from '@/types/api/book';
import { useQuery } from '@tanstack/react-query';

interface useGetBooksProps {
  mainId: string;
  params: BookParams;
}

function useGetBooks({ mainId, params }: useGetBooksProps) {
  const { limit, bookId, sort, ascending } = params;

  const { data } = useQuery({
    queryKey: ['book-list', params],
    queryFn: () =>
      getBook({
        endpoint: `${mainId}/main`,
        params: {
          limit: limit,
          bookId: bookId,
          sort: sort,
          ascending: ascending,
        },
      }),
    retry: 3,
  });
  return data;
}

export default useGetBooks;
