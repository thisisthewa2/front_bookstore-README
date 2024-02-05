import { StaticImageData } from 'next/image';

export interface PreviewBookInfoSizeProps {
  size: 'sm' | 'md' | 'lg';
}

export interface PreviewBookInfoProps extends PreviewBookInfoSizeProps {
  image?: string | StaticImageData;
  title?: string;
  alignCenter?: boolean;
  itemsStart?: boolean;
  authorList?: string[];
  ranking?: number;
  price?: number;
  category?: string;
}
