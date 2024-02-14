import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useFetch = <T>(
  queryKey: string,
  queryFn: (option: T) => Promise<any>,
  params: T,
) => {
  const context = useQuery({
    queryKey: [queryKey, params],
    queryFn: () => queryFn(params),
    enabled: true,
  });

  return context;
};

export const useDelete = <T>(mutationFn: (option: T) => Promise<any>, option: T) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess : () => queryClient.invalidateQueries(),
  });
  return mutation
};

export const usePost = <T>(mutationFn: (option : T) => Promise<any>, option: T) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => mutationFn(option),
    onSuccess : () => queryClient.invalidateQueries(),
  });
  return mutation
};

export const usePut = <T>(
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
