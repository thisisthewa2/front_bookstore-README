interface BookCategoryProps {
  category: string;
}

function BookCategory({ category }: BookCategoryProps) {
  return <div className="text-gray-3 text-14">[{category}]</div>;
}

export default BookCategory;
