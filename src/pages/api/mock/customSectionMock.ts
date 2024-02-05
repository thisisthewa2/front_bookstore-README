import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import TestImage2 from '@/public/images/SampleBookCover2.jpeg';
import TestImage3 from '@/public/images/SampleBookCover3.jpeg';
import TestImage4 from '@/public/images/SampleBookCover4.jpeg';

import { StaticImageData } from 'next/image';

export interface CustomBook {
  bookId: number;
  title: string;
  authorList: string[];
  bookImg: string | StaticImageData;
}

export function createBook(
  id: number,
  title: string,
  authorList: string[],
  image: string | StaticImageData,
): CustomBook {
  return {
    bookId: id,
    title,
    authorList,
    bookImg: image,
  };
}
export const CustomSectionMockData_1 = [
  {
    category: '건강/취미',
    bookList: [
      createBook(1, '건강하게 살자', ['홍재원', '안혜정'], TestImage4),
      createBook(2, '건강하게 살자', ['안윤진', '이승연'], TestImage2),
      createBook(3, '건강하게 살자', ['권덕영', '조연아'], TestImage3),
      createBook(4, '건강하게 살자', ['김태은', '문경민'], TestImage1),
    ],
  },
];
export const CustomSectionMockData_3 = [
  {
    category: '건강/취미',
    bookList: [
      createBook(1, '건강하게 살자', ['홍재원', '안혜정'], TestImage4),
      createBook(2, '건강하게 살자', ['안윤진', '이승연'], TestImage2),
      createBook(3, '건강하게 살자', ['권덕영', '조연아'], TestImage3),
      createBook(4, '건강하게 살자', ['김태은', '문경민'], TestImage1),
    ],
  },
  {
    category: '경제경영',
    bookList: [
      createBook(11, '경제경영1', ['유성현', '홍길동'], TestImage1),
      createBook(12, '경제경영2', ['조유담', '임건우'], TestImage2),
      createBook(13, '경제경영3', ['남민섭', '김다은'], TestImage3),
      createBook(14, '경제경영4', ['강현지', '전우치'], TestImage4),
    ],
  },
  {
    category: '고전',
    bookList: [
      createBook(21, '고전1', ['SomeoneWrite', 'VeryVeryLongName'], TestImage1),
      createBook(22, '고전2', ['Adelle', 'Michael Nicholsen'], TestImage2),
      createBook(23, '고전3', ['정희원', '허삼관'], TestImage3),
      createBook(24, '고전4', ['윤슬', '이바다'], TestImage4),
    ],
  },
];
