import { BookOverviewType } from '@/types/bookOverviewType';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import TestImage2 from '@/public/images/SampleBookCover2.jpeg';
import TestImage4 from '@/public/images/SampleBookCover4.jpeg';

const bookOverviewsMock: BookOverviewType[] = [
  {
    book: {
      bookId: 1,
      bookTitle: '자바스크립트 마스터',
      bookImgUrl: TestImage1, // 객체 직접 할당
      price: 25000,
      authors: ['홍길동'],
      rank: 1,
      publisher: 'IT출판사',
      averageRating: 4.5,
      reviewCount: 150,
      genre: '프로그래밍',
      categories: ['국내도서', '웹 개발'], // 수정된 categories
      publishedDate: '2023-01-10',
    },
    like: {
      userLiked: true,
      count: 100,
    },
  },
  {
    book: {
      bookId: 2,
      bookTitle: '리액트 초급부터 심화까지',
      bookImgUrl: TestImage2, // 객체 직접 할당
      price: 30000,
      rank: 99,
      authors: ['이순신'],
      publisher: '프론트엔드 출판사',
      averageRating: 4.8,
      reviewCount: 200,
      genre: '프로그래밍',
      categories: ['해외도서', '리액트'], // 수정된 categories
      publishedDate: '2023-02-15',
    },
    like: {
      userLiked: false,
      count: 150,
    },
  },
  {
    book: {
      bookId: 3,
      bookTitle: 'Vue.js 입문',
      bookImgUrl: TestImage4, // 객체 직접 할당
      price: 28000,
      authors: ['강감찬'],
      rank: 100,
      publisher: '웹 출판사',
      averageRating: 4.2,
      reviewCount: 90,
      genre: '프로그래밍',
      categories: ['국내도서', 'Vue.js'], // 수정된 categories
      publishedDate: '2023-03-20',
    },
    like: {
      userLiked: true,
      count: 80,
    },
  },
  {
    book: {
      bookId: 4,
      bookTitle: '현대 웹 디자인의 이해',
      bookImgUrl: TestImage1, // 객체 직접 할당
      price: 32000,
      authors: ['조세핀'],
      rank: 4,
      publisher: '디자인 출판사',
      averageRating: 4.7,
      reviewCount: 120,
      genre: '디자인',
      categories: ['해외도서', '웹 디자인'], // 수정된 categories
      publishedDate: '2023-04-25',
    },
    like: {
      userLiked: false,
      count: 110,
    },
  },
  {
    book: {
      bookId: 5,
      bookTitle: '프론트엔드 프로젝트 가이드',
      bookImgUrl: TestImage2, // 객체 직접 할당
      price: 27000,
      authors: ['박백범'],
      rank: 3,
      publisher: '개발 출판사',
      averageRating: 4.3,
      reviewCount: 130,
      genre: '프로그래밍',
      categories: ['국내도서', '프로젝트 관리'], // 수정된 categories
      publishedDate: '2023-05-30',
    },
    like: {
      userLiked: true,
      count: 95,
    },
  },
];

export { bookOverviewsMock };
