import { getBook } from '@/api/book';
import { BookParams } from '@/types/api/book';
import { useQuery } from '@tanstack/react-query';

interface useGetBooksProps {
  mainId: string;
  params: BookParams;
}

function useGetBooks({ mainId, params }: useGetBooksProps) {
  const { limit, bookId, sort, ascending } = params;

  const { data, error, isError, isLoading } = useQuery({
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

  if (isError) {
    console.error(error);
  }

  return {
    data: data?.data, // API 응답에서 실제 필요한 데이터
    isLoading, // 데이터 로딩 중인지 여부
    isError, // 에러 발생 여부
    error, // 발생한 에러 객체
  };
}

export default useGetBooks;
