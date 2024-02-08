import RegisterButton from "@/components/button/register/registerButton";
import classNames from "classnames";

interface TitleContentTableProps {
  title1: string;
  content1: string;
  title2?: string;
  content2: string;
  truncate?: 'truncate';
  button?: boolean;
  onClick?: () => void;
  green?: boolean;
  black?: string;
  gap?: number;
}

function TitleContentTable({ title1, content1, title2, content2, truncate, button = false, onClick, green, black, gap = 20} : TitleContentTableProps) {
  return (
    <div className={`relative flex flex-col gap-${gap} text-16 mt-10`}>
      <div className="flex items-center justify-start">
        <p className={`w-78 text-${green ? 'green' : 'gray-3'} font-normal`}>{title1}</p>
        <p className={classNames("w-full", black, truncate)}>{content1}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="w-78 text-gray-3 font-normal">{title2}</p>
        <p className="w-full text-gray-3 font-light">{content2}</p>
      </div>
      {button && <div className="absolute w-50 top-0 right-0">
        <RegisterButton height={36} text={14} onClick={onClick}>선택</RegisterButton>
      </div>}
    </div>
  );
}

export default TitleContentTable;
