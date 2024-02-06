interface WriteButtonProps {
  showButton: boolean;
  onClick: () => void;
}
function WritePostButton({ showButton, onClick }: WriteButtonProps) {
  if (!showButton) {
    return null; // 렌더링하지 않음
  }

  return (
    <button
      className="flex-center relative ml-auto h-40 w-108 rounded-md border border-green
        text-14 text-green mobile:hidden"
      onClick={onClick}>
      글쓰기
    </button>
  );
}

export default WritePostButton;
