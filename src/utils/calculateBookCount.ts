import { WishListData } from '@/types/wishPageType';

export const calcBookPlusCount = (
  wishList: WishListData[],
  item: WishListData,
  setter: React.Dispatch<React.SetStateAction<WishListData[]>>,
) => {
  const itemIdx = wishList.findIndex((data) => data.id === item.id);
  if (itemIdx > -1) {
    let clickedCount = (wishList[itemIdx]['clicked'] || 1) + 1;
    setter((prev) =>
      prev.map((ele, index) =>
        index === itemIdx ? { ...ele, clicked: clickedCount } : ele,
      ),
    );
  }
};

export const calcBookMinusCount = (
  wishList: WishListData[],
  item: WishListData,
  setter: React.Dispatch<React.SetStateAction<WishListData[]>>,
) => {
  const itemIdx = wishList.findIndex((data) => data.id === item.id);
  if (itemIdx > -1) {
    let clickedCount = (wishList[itemIdx]['clicked'] || 1) - 1;
    setter((prev) =>
      prev.map((ele, index) =>
        index === itemIdx ? { ...ele, clicked: clickedCount } : ele,
      ),
    );
  }
};
