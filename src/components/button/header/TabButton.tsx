import React from 'react';

interface TabButtonProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  isSmall?: boolean;
}

function TabButton({ selected, onClick, title, isSmall }: TabButtonProps) {
  const fontStyle = `${isSmall ? 'text-16 mobile:text-12' : 'text-18 mobile:text-14'}`;
  const selectedStyle =
    selected && isSmall
      ? 'border border-b-2 border-x-transparent border-b-green border-t-white text-green'
      : selected
        ? 'text-green'
        : '';
  return (
    <button
      className={`flex-center mt-1 h-68 mobile:h-48 ${fontStyle} font-bold ${selectedStyle}`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default TabButton;
