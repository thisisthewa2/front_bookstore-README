// import DropDown from '@/components/dropDown/dropDown';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/book/bookOverviewCard/bookOverViewCard';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import TestImage2 from '@/public/images/SampleBookCover2.jpeg';
import TestImage4 from '@/public/images/SampleBookCover4.jpeg';

const testData1 = {
  book: {
    productId: 1,
    title: '웹 프론트엔드의 정석',
    imageUrl: TestImage1,
    price: 30000,
    authors: ['김웹', '박프론트'],
    rank: 1,
  },
  like: {
    userLiked: true,
    count: 150,
  },
};

const testData2 = {
  book: {
    productId: 2,
    title: '자바스크립트 마스터하기',
    price: 25000,
    authors: ['이자바', '최스크립트'],
    rank: 3,
  },
  like: {
    userLiked: false,
    count: 45,
  },
};

const testData3 = {
  book: {
    productId: 3,
    title: '현대 웹 디자인의 이해',
    imageUrl: TestImage2,
    price: 28000,
    authors: ['정디자인', '한웹'],
    rank: 5,
  },
  like: {
    userLiked: true,
    count: 230,
  },
};

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <BookOverviewCard book={testData1.book} like={testData1.like} />
      <BookOverviewCard book={testData2.book} like={testData2.like} />
      <BookOverviewCard book={testData3.book} like={testData3.like} />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연', '작가얌', '작가2', '작가3', '작가3', '작가3']}
        size="lg"
        ranking={10}
        category="가정/육아"
        price={123456789}
        image={TestImage4}
      />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연', '작가얌', '작가2', '작가333']}
        size="md"
        ranking={30}
        image={TestImage4}
      />
      <PreviewBookInfo
        title="겁나 비싼 책"
        authorList={['이승연', '작가얌', '작가2', '작가3']}
        size="sm"
        ranking={100}
        image={TestImage4}
      />
    </div>
  );
}

export default TestPage;
