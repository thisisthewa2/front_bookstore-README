/** 별 다른 기능 없이 요소 사이에 간격을 주고 싶을 때 넣는 컴포넌트
 * 반응형을 고려해 width, height props로는 숫자 3개가 들어간 배열을 받습니다
 */

interface SpacingProps {
  width?: [desktop: number, tablet: number, mobile: number];
  height?: [desktop: number, tablet: number, mobile: number];
}

function Spacing({ width = [2, 2, 2], height = [2, 2, 2] }: SpacingProps) {
  return (
    <div>
      <div
        className="mobile:hidden tablet:hidden pc:block"
        style={{ width: width[0], height: height[0] }}></div>
      <div
        className="mobile:hidden tablet:block pc:hidden"
        style={{ width: width[1], height: height[1] }}></div>
      <div
        className="mobile:block tablet:hidden pc:hidden"
        style={{ width: width[2], height: height[2] }}></div>
    </div>
  );
}

export default Spacing;
