import { useState } from 'react';
import { GenreProps } from '@/pages/api/mock';
export interface GenreButtonProps extends GenreProps {
  editMode?: boolean;
}

function GenreButton({
  title,
  selected: initialSelected,
  editMode,
}: GenreButtonProps) {
  const [selected, setSelected] = useState(initialSelected);

  const handleClick = () => {
    if (editMode) setSelected(!selected);
  };

  return (
    <button
      className={`text-13 flex-center h-33 w-fit whitespace-nowrap rounded-[53px] border ${
        selected ? 'border-black' : 'border-gray-1'
      } pc:text-14 ${editMode ? 'hover:border-green hover:text-green' : ''}`}
      onClick={handleClick}>
      <div className="mx-30">{title}</div>
    </button>
  );
}

export default GenreButton;
