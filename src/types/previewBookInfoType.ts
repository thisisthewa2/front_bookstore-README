import { SetStateAction } from 'jotai';
import { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';

export interface PreviewBookInfoSizeProps {
  size: 'xs' |'sm' | 'md' | 'lg';
}

export interface PreviewBookInfoProps extends PreviewBookInfoSizeProps {
  image?: string | StaticImageData | null;
  title?: string;
  alignCenter?: boolean;
  itemsStart?: boolean;
  authorList?: string[];
  ranking?: number;
  price?: number;
  category?: string;
  bookId?: number;
  isUnit?: boolean;
  community?: boolean;
  onClick?: () => void;
}
