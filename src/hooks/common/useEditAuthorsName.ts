interface useEditAuthorsNameProps {
  authors: string | string[] | undefined | null;
  isDetail?: boolean | undefined;
}

function useEditAuthorsName({ authors, isDetail }: useEditAuthorsNameProps) {
  // authors가 문자열 또는 배열이 아닌 경우 빈 문자열을 반환합니다.
  if (!authors || (typeof authors !== 'string' && !Array.isArray(authors))) {
    return '';
  }

  // 문자열인 경우
  if (typeof authors === 'string') {
    const index = authors.indexOf('('); // '(' 문자의 인덱스를 찾습니다.
    if (index !== -1) {
      // 만약 '(' 문자가 존재한다면
      const editedAuthor = authors.substring(0, index); // 문자열의 처음부터 '(' 이전까지의 부분 문자열을 반환합니다.
      return isDetail ? `${editedAuthor} 지음` : editedAuthor;
    } else {
      // 만약 '(' 문자가 존재하지 않는다면
      return authors; // 주어진 문자열 그대로 반환합니다.
    }
  }

  // 배열인 경우
  const editedAuthors: string[] = [];
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    const index = author.indexOf('('); // '(' 문자의 인덱스를 찾습니다.
    if (index !== -1) {
      // 만약 '(' 문자가 존재한다면
      const editedAuthor = author.substring(0, index); // 문자열의 처음부터 '(' 이전까지의 부분 문자열을 배열에 추가합니다.
      if (i === authors.length - 1) {
        // 마지막 요소인 경우
        editedAuthors.push(isDetail ? `${editedAuthor} 지음` : editedAuthor);
      } else {
        editedAuthors.push(editedAuthor);
      }
    } else {
      // 만약 '(' 문자가 존재하지 않는다면
      editedAuthors.push(author); // 주어진 문자열을 배열에 추가합니다.
    }
  }
  return editedAuthors;
}

export default useEditAuthorsName;
