interface BookTitleProps {
  title: string;
  alignCenter?: boolean;
}

function BookTitle({ title, alignCenter }: BookTitleProps) {
  return (
    <p
      className={`text-black text-15 font-medium text-overflow2 mb-4 mt-12 ${
        alignCenter ? 'text-center font-bold' : ''
      }`}>
      {title}
    </p>
  );
}

export default BookTitle;
