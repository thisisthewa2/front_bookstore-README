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
      className={`whitespace-nowrap rounded-[53px] w-fit h-33 text-13 border flex-center bg-white
        ${selected ? 'text-green border-green' : 'text-black border-gray-2'} pc:text-14`}
      onClick={handleClick}>
      <div className="mx-30">#{title}</div>
    </button>
  );
}

export default CustomGenreButton;
