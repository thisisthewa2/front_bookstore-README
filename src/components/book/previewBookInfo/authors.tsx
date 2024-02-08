interface BookAuthorsProps {
  alignCenter?: boolean;
  authorList: string[];
}

function BookAuthors({ alignCenter, authorList }: BookAuthorsProps) {
  return (
    <div
      className={`text-gray-3 text-14 truncate ${alignCenter ? 'text-center' : ''}`}>
      {authorList.join(', ')}
    </div>
  );
}

export default BookAuthors;
