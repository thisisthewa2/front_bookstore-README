/** 퍼센트를 보여주는 컴포넌트 */

interface PercentageProps {
  num: number; // 숫자
  total: number; // 총량
}

function Percentage({ num, total }: PercentageProps) {
  const BackgroundStyle = `bg-gray-1 rounded-[56px] w-160 mobile:w-100 h-[6px] relative`;
  const percent = total > 0 ? Math.ceil((num * 100) / total) : 0;
  const InnerStyle = `bg-green h-6 rounded-full`;
  return (
    <div className={BackgroundStyle}>
      <div className={InnerStyle} style={{ width: `${percent}%` }}></div>
    </div>
  );
}

export default Percentage;
