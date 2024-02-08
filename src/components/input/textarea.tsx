import classNames from 'classnames';
import { ReactNode } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface TextareaProps {
  height?: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  as?: ReactNode;
}

function Textarea({ height, control, name, as = null }: TextareaProps) {
  const className = classNames(
    'w-full resize-none border border-gray-1 rounded-[10px] px-20 py-15 focus:border-green outline-none',
    height,
  );
  const { field } = useController({name, control})

  return (
    <div className="flex flex-col w-full gap-12">
      <label htmlFor={field.name} className="text-16 text-b-b">
        내용
      </label>
      {as ?? as}
      <textarea
        id={field.name}
        className={className}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        placeholder="내용을 작성해주세요"></textarea>
    </div>
  );
}

export default Textarea;
