import React, { useCallback } from 'react';
type DropDownItemProps = {
  menu: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

function DropDownItem({
  menu,
  setSelectedItem,
  setIsClick,
}: DropDownItemProps) {
  const handleSelectItem = useCallback((text: string) => {
    setSelectedItem(text);
    setIsClick(false);
  }, []);
  return (
    <div>
      <li
        className="flex h-42 items-center pl-16 pr-10 text-14 hover:bg-gray-5"
        onClick={() => handleSelectItem(menu)}>
        {menu}
      </li>
    </div>
  );
}

export default DropDownItem;
