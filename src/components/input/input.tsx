import classNames from 'classnames';
import { ReactNode } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface InputProps {
  type: string;
  title: string;
  height?: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  as?: ReactNode;
  description?: string;
}

function Input({
  type,
  title,
  height,
  control,
  name,
  as = null,
  description,
}: InputProps) {
  const className = classNames(
    'w-full resize-none border border-gray-1 rounded-[10px] px-20 py-15 focus:border-green outline-none',
    height,
  );
  const { field } = useController({ name, control });

  return (
    <div className="flex w-full flex-col gap-12">
      <label htmlFor={field.name} className="text-b-b text-16">
        {title}
        {description && (
          <span className="ml-8 text-12 font-light text-gray-2">
            {description}
          </span>
        )}
      </label>
      {as ?? as}
      <input
        type={type}
        id={field.name}
        className={className}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        placeholder="내용을 작성해주세요"></input>
    </div>
  );
}

export default Input;
