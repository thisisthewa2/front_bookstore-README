import cls from '@/utils/cls';

interface ActionButtonProps {
  classNames?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  label?: string;
  variant: 'primary' | 'secondary';
  mobile?: boolean;
  disabled?: boolean;
}

function ActionButton({
  onClick,
  type,
  label,
  variant,
  mobile,
  disabled,
}: ActionButtonProps) {
  const ActionButtonClass = cls(
    'w-130 h-40 flex-center rounded-md text-14 font-[500]',
    variant === 'primary'
      ? 'bg-white border-primary border-2 text-primary'
      : 'bg-primary border-primary border-2 text-white',
    mobile ? 'w-140' : '',
  );
  return (
    <button
      type={type}
      className={ActionButtonClass}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
}

export default ActionButton;
