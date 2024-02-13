/** 현재 위치한 카테고리 값을 전역변수로 업데이트하는 훅*/

import { useAtom } from "jotai"

import { LocatedCategoryAtom } from "@/store/state"

function useSetLocatedCategory() {
  const [, setLocatedCategory] = useAtom(LocatedCategoryAtom);
  const updateLocatedCategory = (mainId: number, subId?:number) => {
    setLocatedCategory(() => {
      return { mainId: mainId, subId: subId };
    })
  }
  return { updateLocatedCategory };
}

export default useSetLocatedCategory