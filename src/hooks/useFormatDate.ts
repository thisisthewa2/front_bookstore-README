export default function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear(); // 년도 추출
  const month = date.getMonth() + 1; // 월 추출 (월은 0부터 시작하므로 +1 해줌)
  const day = date.getDate(); // 일 추출

  // 문자열 형식으로 결합하여 반환
  return `${year}. ${month}. ${day}`;
}
