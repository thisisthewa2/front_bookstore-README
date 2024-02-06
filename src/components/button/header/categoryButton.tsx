import React from 'react';
interface CategoryButtonProps {
  label: string;
  onClick: () => void;
  style: React.CSSProperties;
}

function CategoryButton({ label, onClick, style }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="border-spacing-20 gap-x-60">
      <div className="mb-12 font-bold" style={{ color: style.color }}>
        {label}
        <div className="h-5 mobile:hidden"></div>
      </div>
    </button>
  );
}

export default CategoryButton;
