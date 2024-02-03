interface ActionButtonProps {
  classNames?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  label?: string;
  variant: 'primary' | 'secondary';
  mobile?: boolean;
}

function classNames<T>(...classes: Array<T>) {
  return classes.filter(Boolean).join(' ');
}

function ActionButton({
  onClick,
  type,
  label,
  variant,
  mobile,
}: ActionButtonProps) {
  const ActionButtonClass = classNames(
    'w-134 h-40 flex-center rounded-md text-14 font-[500]',
    variant === 'primary'
      ? 'bg-white border-green border-2 text-green'
      : 'bg-green border-green border-2 text-white',
    mobile ? 'w-140' : '',
  );
  return (
    <button type={type} className={ActionButtonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default ActionButton;
