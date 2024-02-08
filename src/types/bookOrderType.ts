import { StaticImageData } from 'next/image';

interface BookOrderType {
  book: {
    productId: number;
    title: string;
    imageUrl?: string | null | StaticImageData;
    cost: number;
    authors: string[] | null;
  };
  order: {
    deliveryStatus: string;
    address: string;
    orderCount: number;
  };
}

export type { BookOrderType };
