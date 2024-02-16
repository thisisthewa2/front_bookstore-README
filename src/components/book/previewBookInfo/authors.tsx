interface BookAuthorsProps {
  alignCenter?: boolean;
  authorList: string[];
}

function BookAuthors({ alignCenter, authorList }: BookAuthorsProps) {
  return (
    <div
      className={`truncate text-14 text-gray-3 ${alignCenter ? 'text-center' : ''}`}>
      {authorList.join(', ')}
    </div>
  );
}

export default BookAuthors;
