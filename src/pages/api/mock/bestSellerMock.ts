import { BookOverviewType } from '@/types/bookOverviewType';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import TestImage2 from '@/public/images/SampleBookCover2.jpeg';
import TestImage4 from '@/public/images/SampleBookCover4.jpeg';

const bookOverviewsMock: BookOverviewType[] = [
  {
    book: {
      bookId: 1,
      bookTitle: '자바스크립트 마스터',
      bookImgUrl:
        'https://image.aladin.co.kr/product/32104/48/cover200/k212834108_1.jpg',
      price: 25000,
      authors: ['홍길동'],
      rank: 1,
      publisher: 'IT출판사',
      averageRating: 3.8,
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
      bookImgUrl:
        'https://image.aladin.co.kr/product/13501/85/cover500/k042532608_1.jpg', // 객체 직접 할당
      price: 30000,
      authors: ['이순신'],
      rank: 22,
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
      bookImgUrl:
        'https://image.aladin.co.kr/product/13650/41/cover500/8961412124_1.jpg', // 객체 직접 할당
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
      bookImgUrl:
        'https://media.istockphoto.com/id/1808231641/ko/%EB%B2%A1%ED%84%B0/%EC%A7%80%EC%8B%9D%EC%9D%80-%EC%A0%84%EB%A0%A5-%EA%B0%9C%EB%85%90%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=ME7Z9wvpbf_Ofw3Iw1qgZxvQAkpOBeWma-Keu_MLHqI=', // 객체 직접 할당
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
