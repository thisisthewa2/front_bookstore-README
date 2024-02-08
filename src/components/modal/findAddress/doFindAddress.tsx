function DoFindAddress() {
  return (
    <div className="flex flex-col gap-12 w-full bg-gray-5 text-16 font-normal p-20">
      <h2>다음과 같이 검색해보세요!</h2>
      <ul className="list-disc list-inside text-gray-2">
        <li>도로명 + 건물번호</li>
        <li>동/읍/면/리 + 번지</li>
        <li>건물명, 아파트명</li>
      </ul>
    </div>
  )
}

export default DoFindAddress