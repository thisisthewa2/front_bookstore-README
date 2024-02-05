/** 책 가격 숫자를 받아 스타일된 div 태그를 리턴하는 서브 컴포넌트
 *
 * @params number (책 가격)
 * @params number (폰트 크기)
 * @params string (폰트 색깔)
 * @params boolean (font-bold 속성의 유무)
 * @params hasUnit (가격 뒤에 "원" 붙일지 말지 결정 유무)
 * @returns string(ex. 12,000원)
 */

import { THOUSAND_UNIT } from 'src/constants/price';

function BookPrice({
  price = 0,
  fontSize = 5,
  fontColor = 'text-black',
  isBold = false,
  hasUnit = true,
}) {
  const priceClassNames = `${fontColor} ${isBold ? 'font-bold' : ''}`;
  return (
    <div className={priceClassNames} style={{ fontSize: `${fontSize}px` }}>
      {price.toString().replace(THOUSAND_UNIT, ',')} {hasUnit ? '원' : ''}
    </div>
  );
}

export default BookPrice;
