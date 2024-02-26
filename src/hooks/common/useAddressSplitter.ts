interface useAddressSplitterProps {
  address: string | undefined | null;
}
function useAddressSplitter({ address }: useAddressSplitterProps) {
  if (!address) return ['', '', '']; // 주소가 없는 경우에는 처리를 중단합니다.
  let splitAddress = ['', '', ''];

  // 정규식을 사용하여 숫자만 있는 부분을 찾습니다.
  const numberRegex = /^\d+/;
  const numberMatch = numberRegex.exec(address);
  const numberPart = numberMatch ? numberMatch[0] : '';

  // 정규식을 사용하여 괄호가 끝나기까지의 부분을 찾습니다.
  const parenthesisRegex = /\(([^)]+)\)/;
  const parenthesisMatch = parenthesisRegex.exec(address);
  const parenthesisPart = parenthesisMatch ? parenthesisMatch[0] : '';

  // numberPart가 끝나는 부분부터 괄호가 끝나는 부분까지 포함하여 추출합니다.
  const endIndex = numberMatch ? numberMatch.index + numberPart.length : 0;
  const middlePart = address
    .substring(
      endIndex,
      parenthesisMatch
        ? parenthesisMatch.index + parenthesisPart.length
        : address.length,
    )
    .trim();

  // endPart는 numberPart와 middlePart를 제외한 나머지 부분입니다.
  const endPart = address
    .replace(numberPart, '')
    .replace(middlePart, '')
    .replace(parenthesisPart, '')
    .trim();

  // 분할된 부분을 배열에 담아 설정합니다.
  splitAddress = [numberPart.trim(), middlePart, endPart];

  return splitAddress;
}

export default useAddressSplitter;
