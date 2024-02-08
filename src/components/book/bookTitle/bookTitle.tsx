interface BookTitleProps {
  title: string;
  fontColor?: string;
  fontSize?: number;
  isBold?: boolean;
  classNames?: string;
}
function BookTitle({
  title,
  fontColor = 'text-black',
  fontSize = 14,
  isBold = false,
  classNames,
}: BookTitleProps) {
  return (
    <div
      className={`${classNames ? `${classNames} ` : ''}${fontColor} ${isBold ? 'font-bold' : ''}`}
      style={{ fontSize: fontSize }}>
      {title}
    </div>
  );
}

export default BookTitle;
