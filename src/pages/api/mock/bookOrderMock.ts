import { BookOrderCardListProps } from '@/components/card/bookOrderCard/bookOrderCardList';

export const bookOrderTestData: BookOrderCardListProps = {
  orderData: [
    {
      bookData: [
        {
          book: {
            productId: 1,
            title: '첫 번째 책',
            imageUrl:
              'https://image.aladin.co.kr/product/33315/55/cover/8934920998_1.jpg',
            cost: 15000,
            authors: ['저자 A', '저자 B'],
          },
          order: {
            deliveryStatus: '배송 중',
            address: '서울시 강남구 역삼동',
            orderCount: 1,
          },
        },
        {
          book: {
            productId: 2,
            title: '두 번째 책',
            imageUrl:
              'https://image.aladin.co.kr/product/33072/75/cover/k092937309_1.jpg',
            cost: 22000,
            authors: ['저자 C'],
          },
          order: {
            deliveryStatus: '배송 완료',
            address: '서울시 서초구 반포동',
            orderCount: 3,
          },
        },
      ],
      orderDate: '2023-01-01',
    },
    {
      bookData: [
        {
          book: {
            productId: 3,
            title: '세 번째 책',
            imageUrl:
              'https://image.aladin.co.kr/product/4382/61/cover/054444220d_1.jpg',
            cost: 18000,
            authors: null,
          },
          order: {
            deliveryStatus: '주문 취소',
            address: '서울시 송파구 잠실동',
            orderCount: 133,
          },
        },
        {
          book: {
            productId: 4,
            title: '네 번째 책',
            imageUrl:
              'https://image.aladin.co.kr/product/47/23/cover/04515249ff_1.jpg',
            cost: 25000,
            authors: ['저자 D', '저자 E'],
          },
          order: {
            deliveryStatus: '배송 준비 중',
            address: '서울시 마포구 상암동',
            orderCount: 1234,
          },
        },
      ],
      orderDate: '2023-01-02',
    },
    {
      bookData: [
        {
          book: {
            productId: 5,
            title: '다섯 번째 책',
            imageUrl:
              'https://image.aladin.co.kr/product/31250/68/cover/k702832360_1.jpg',
            cost: 30000,
            authors: ['저자 F'],
          },
          order: {
            deliveryStatus: '배송 지연',
            address: '서울시 강서구 화곡동',
            orderCount: 99999,
          },
        },
      ],
      orderDate: '2023-01-03',
    },
  ],
};
