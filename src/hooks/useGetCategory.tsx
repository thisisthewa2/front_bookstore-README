// 카테고리 전체 리스트를 조회하는 api를 실행해 전역변수 CategoryListAtom에 넣는 훅

import { getCategoryList } from "@/api/category"
import { CategoryListAtom } from "@/store/state"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"

function useGetCategory() {
  const [, setCategoryList] = useAtom(CategoryListAtom);
  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => getCategoryList(),
    retry: 3,
  })
  setCategoryList(data)
}

export default useGetCategory