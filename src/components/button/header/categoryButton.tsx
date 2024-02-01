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
      className="gap-x-60 border-spacing-20">
      <div className="font-bold mb-12" style={{ color: style.color }}>
        {label}
        <div className="mobile:hidden h-5"></div>
      </div>
    </button>
  );
}

export default CategoryButton;
