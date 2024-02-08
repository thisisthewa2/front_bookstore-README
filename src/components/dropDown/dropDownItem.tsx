import React, { useCallback } from 'react';
type DropDownItemProps = {
  menu: string;
  onSelectedItem: (menu:string) => void
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

function DropDownItem({
  menu,
 onSelectedItem,
  setIsClick,
}: DropDownItemProps) {
  const handleSelectItem = useCallback((text: string) => {
   onSelectedItem(text);
    setIsClick(false);
  }, []);
  return (
    <div className="w-full">
      <li
        className="flex h-42 items-center pl-16 pr-10 text-14 hover:bg-gray-5"
        onClick={() => handleSelectItem(menu)}>
        {menu}
      </li>
    </div>
  );
}

export default DropDownItem;
