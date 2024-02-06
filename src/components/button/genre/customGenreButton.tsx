import React from 'react';
import { GenreProps } from '@/pages/api/mock';

export interface GenreButtonProps extends GenreProps {
  selected: boolean;
  onSelect: (title: string) => void;
}

function CustomGenreButton({ title, selected, onSelect }: GenreButtonProps) {
  const handleClick = () => {
    if (!selected) {
      onSelect(title);
    }
  };

  return (
    <button
      className={`text-13 flex-center h-33 w-fit whitespace-nowrap rounded-[53px] border bg-white
        ${selected ? 'border-green text-green' : 'border-gray-2 text-black'} pc:text-14`}
      onClick={handleClick}>
      <div className="mx-30">#{title}</div>
    </button>
  );
}

export default CustomGenreButton;
