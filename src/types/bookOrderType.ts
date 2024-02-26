export type ChangedOrderBookData = {
  orderId: number;
  orderBook: OrderBook[];
  createDate: string;
  updateDate: string;
};

export type OrderBookData = {
  orderId: number;
  createDate: string;
  orderBook: OrderBook[];
  createTime?: string;
  updateTime?: string;
  deliveryId: number;
  deliveryStatus: string;
};

export type OrderBook = {
  orderBookId: number;
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
  authors: string;
  price: number;
  quantity: number;
};
