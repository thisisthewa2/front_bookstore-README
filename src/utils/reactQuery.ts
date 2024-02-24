import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useFetch = <T>(
  queryKey: string,
  queryFn: (option: T) => Promise<any>,
  params: T,
  enabled?: any,
) => {
  const context = useQuery({
    queryKey: [queryKey, params],
    queryFn: () => queryFn(params),
    enabled: !!enabled ?? true
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
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess: (data) => {
      queryClient.invalidateQueries();
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
