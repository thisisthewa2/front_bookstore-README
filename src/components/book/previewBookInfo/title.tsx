interface BookTitleProps {
  title: string;
  alignCenter?: boolean;
}

function BookTitle({ title, alignCenter }: BookTitleProps) {
  return (
    <p
      className={`font-medium text-overflow2 mb-4 mt-12 text-15 text-black ${
        alignCenter ? 'text-center font-bold' : ''
      }`}>
      {title}
    </p>
  );
}

export default BookTitle;
