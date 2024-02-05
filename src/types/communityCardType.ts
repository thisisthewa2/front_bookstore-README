import { StaticImageData } from 'next/image';

export interface CommunityCardProps {
  id?: number;
  profileImg: string | StaticImageData; //TODO 수정필요
  userNickname: string;
  createAt: string;
  bookCover: string | StaticImageData; //TODO 수정필요
  bookTitle: string;
  review: string;
  kebab?: boolean;
}
