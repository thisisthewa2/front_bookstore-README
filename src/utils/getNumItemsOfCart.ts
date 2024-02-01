export const getNumItemsOfCart = (numItemsOfCart: number) => {
  if (numItemsOfCart >= 99) {
    return '99+';
  } else {
    return numItemsOfCart;
  }
};
