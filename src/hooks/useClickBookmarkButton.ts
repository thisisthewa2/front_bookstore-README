import { useState } from 'react'
import { useUpdateBookmark } from './api/useUpdateBookmark';

function useClickBookmarkButton({bookId=0, marked=false, count=0}) {
  const [isBookmarked, setIsBookMarked] = useState(marked);
  const [bookmarkCount, setBookmarkCount] = useState(count);
  
  const { updateBookmark, isBookmarkPending } = useUpdateBookmark({
    bookId: Number(bookId),
    onChangeBookmarkCount: () => {
      if (isBookmarked) {
        setBookmarkCount(bookmarkCount-1);
      } else {
        setBookmarkCount(bookmarkCount + 1);
      }
    },
    onChangeBookmarked: (prevState) => setIsBookMarked(prevState),
  });

  return {
    updateBookmark, isBookmarkPending, isBookmarked, bookmarkCount
  }
}

export default useClickBookmarkButton