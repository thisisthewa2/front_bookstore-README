// 무한 스크롤 데이터를 불러오는 훅

import { useEffect } from 'react';
import {
  GetNextPageParamFunction,
  InfiniteData,
  useInfiniteQuery,
} from '@tanstack/react-query';

interface useCustomInfiniteQueryProps {
  endpoint?: string;
  queryKey: string[];
  queryFunc: any;
  cursorName: string;
  initialCursorId?: number;
  limit?: number;
  sort?: string;
  ascending?: boolean;
  refetchTrigger?: boolean;
  getNextPageParamsFunc: GetNextPageParamFunction<number, any>;
  selectFunc?: (data: InfiniteData<any, number>) => any[];
}

function useCustomInfiniteQuery({
  endpoint,
  queryKey,
  queryFunc,
  cursorName,
  initialCursorId = 1,
  limit = 10,
  sort,
  ascending,
  refetchTrigger = false,
  getNextPageParamsFunc,
  selectFunc,
}: useCustomInfiniteQueryProps) {
  const {
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isRefetching,
    data,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [...queryKey],
    queryFn: ({ pageParam = initialCursorId }) => {
      return queryFunc({
        endpoint: `${endpoint}`,
        params: {
          [cursorName]: String(pageParam),
          limit: String(limit),
          sort: String(sort),
          ascending: String(ascending),
        },
      });
    },
    initialPageParam: initialCursorId,
    getNextPageParam: getNextPageParamsFunc,
    select: selectFunc,
  });

  useEffect(() => {
    if (refetchTrigger && !isRefetching && hasNextPage) {
      fetchNextPage();
    }
  }, [refetchTrigger, isRefetching, hasNextPage]);

  return { data, isFetchingNextPage, isRefetching, hasNextPage, isLoading };
}

export default useCustomInfiniteQuery;
