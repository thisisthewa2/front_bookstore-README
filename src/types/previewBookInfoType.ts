import { StaticImageData } from 'next/image';

export interface PreviewBookInfoProps {
  image?: string | StaticImageData;
  title?: string;
  alignCenter?: boolean;
  itemsStart?: boolean;
  authorList?: string[];
  ranking?: number;
  size: 'sm' | 'md' | 'lg';
  price?: number;
  category?: string;
}
