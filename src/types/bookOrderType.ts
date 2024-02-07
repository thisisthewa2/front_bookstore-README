import { StaticImageData } from "next/image";

interface BookOrderType {
  book: {
    productId: number;
    title: string;
    imageUrl?: string | null | StaticImageData;
    price: number;
    authors: string[] | null;
  };
  order: {
    deliveryStatus: string;
    address: string;
  };
}

export type { BookOrderType };
