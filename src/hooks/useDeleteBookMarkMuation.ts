import { deleteBookMarkItem } from '@/api/bookmark';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteBookMarkMuation() {
  const queryClient = useQueryClient();
  const deleteBookMarkItemMutation = useMutation({
    mutationFn: (bookmarkId: string) => deleteBookMarkItem(bookmarkId),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [QUERY_KEY.book] });
    },
  });
  return deleteBookMarkItemMutation;
}

export default useDeleteBookMarkMuation;
