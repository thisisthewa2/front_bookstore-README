export type DeliveryItem = {
  deliveryId: number;
  deliveryStatus: keyof OrderOverViewItem;
  name: string;
  phone: string;
  address: string;
  message: string;
  paymentMethod: string;
  paymentAmount: number;
  memberId: number;
  nickname: string;
  email: string;
  socialId: any;
  orderDto: OrderDto;
  createDate: string;
  updateDate: string;
};

export interface OrderDto {
  orderId: number;
  orderBook: OrderBook[];
}

export interface OrderBook {
  orderBookId: number;
  bookId: number;
  bookTitle: string;
  authors: string;
  bookImgUrl: string;
  price: number;
  quantity: number;
}

export type OrderOverViewItem = {
  '배송 준비중': number;
  배송중: number;
  배송완료: number;
  '교환/환불': number;
  구매확정: number;
};
