import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useFetch = <T>(
  queryKey: string,
  queryFn: (option: T) => Promise<any>,
  params: T,
  enabled?: any,
  staleTime?: number, // 초 단위로 받음
  gcTime?: number, // 초 단위로 받음
) => {
  const context = useQuery({
    queryKey: [queryKey, params],
    queryFn: () => queryFn(params),
    enabled: enabled ? !!`${enabled}` : true,
    staleTime: staleTime ? staleTime * 1000 : 0, // 기본값 0
    gcTime: gcTime ? gcTime * 1000 : 300000, // 기본값 5분
  });

  return context;
};

export const useDelete = <T>(
  mutationFn: (option: T) => Promise<any>,
  option: T,
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess: () => queryClient.invalidateQueries(),
  });
  return mutation;
};

export interface useUpdateType {
  onSuccess?: (data: any) => void;
  onError?: (error: any, variables?: any, context?: any) => void;
  onSettled?: (data?: any, error?: any) => void;
  onMutate?: (data?: any) => void;
}
export const useUpdate = <T>(
  mutationFn: (option: T) => Promise<any>,
  option: T,
  { onSuccess, onError, onSettled, onMutate }: useUpdateType = {},
  cacheRefetch: boolean = true,
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess: (data) => {
      cacheRefetch ? queryClient.invalidateQueries() : null;
      if (onSuccess) onSuccess(data);
    },
    onError: (error) => {
      if (onError) onError(error);
    },
    onSettled: (data, error) => {
      if (onSettled) onSettled(data, error);
    },
    onMutate: (data) => {
      if (onMutate) onMutate(data);
    },
  });

  return mutation;
};
