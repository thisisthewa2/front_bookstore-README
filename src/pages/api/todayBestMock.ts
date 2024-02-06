import { TodayBestBookCardType } from '@/types/cardType';

/** TodayBestCorner 컴포넌트 확인용 목업 데이터 */
const book1: TodayBestBookCardType = {
  productId: 1,
  bookImg: '/images/SampleBookCover1.jpeg',
  title: 'The Great Gatsby',
  author: ['F. Scott Fitzgerald'],
  rating: 3.5,
  genre: 'Classic Fiction',
  price: 15.99,
};

const book2: TodayBestBookCardType = {
  productId: 2,
  bookImg: '',
  title: 'To Kill a Mockingbird',
  author: ['Harper Lee'],
  rating: 4.8,
  genre: 'Classic Fiction',
  price: 12.49,
};

const book3: TodayBestBookCardType = {
  productId: 3,
  bookImg: '',
  title: "Harry Potter and the Sorcerer's Stone",
  author: ['J.K. Rowling'],
  rating: 5,
  genre: 'Fantasy',
  price: 18.99,
};

const book4: TodayBestBookCardType = {
  productId: 4,
  bookImg: '/images/SampleBookCover2.jpeg',
  title: 'The Catcher in the Rye',
  author: ['J.D. Salinger'],
  rating: 3,
  genre: 'Classic Fiction',
  price: 11.99,
};

const book5: TodayBestBookCardType = {
  productId: 5,
  bookImg: '/images/SampleBookCover3.jpeg',
  title: '1984',
  author: ['George Orwell'],
  rating: 4,
  genre: 'Dystopian Fiction',
  price: 14.29,
};

const book6: TodayBestBookCardType = {
  productId: 6,
  bookImg: '/images/SampleBookCover4.jpeg',
  title: 'The Lord of the Rings',
  author: ['J.R.R. Tolkien'],
  rating: 4,
  genre: 'Fantasy',
  price: 22.99,
};

export const bookListMock = [book1, book2, book3, book4, book5, book6];
