import { basketItemList } from '@/store/state';
import { useAtomValue } from 'jotai';

export function useGetOrderTitle() {
  const items = useAtomValue(basketItemList);

  // 책 제목을 최대 12글자까지만 표시하고 나머지는 생략합니다.
  const bookTitle = items[0]?.bookTitle || '';
  const truncatedTitle =
    bookTitle.length > 12 ? bookTitle.substring(0, 12) + '...' : bookTitle;

  // 표시된 책 제목과 외 몇 건인지를 반환합니다.
  const res = truncatedTitle + '외 ' + (items.length - 1) + '건';

  return res;
}
