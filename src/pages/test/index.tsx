// import DropDown from '@/components/dropDown/dropDown';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';
import TestImage2 from '@/public/images/SampleBookCover3.jpeg';

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연', '작가얌', '작가2', '작가3', '작가3', '작가3']}
        size="lg"
        ranking={10}
        // image={TestImage}
      />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연', '작가얌', '작가2', '작가333']}
        size="md"
        ranking={10}
        image={TestImage2}
      />
      <PreviewBookInfo
        title="겁나 비싼 책"
        authorList={['이승연', '작가얌', '작가2', '작가3']}
        size="sm"
        ranking={10}
        image={TestImage1}
        category="가정/육아"
        price={123456789}
      />
    </div>
  );
}

export default TestPage;
