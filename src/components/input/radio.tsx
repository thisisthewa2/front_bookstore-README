import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface RadioProps {
  title: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  label1: string;
  label2: string;
}

function Radio({ title, control, name, label1, label2 }: RadioProps) {
  const { field } = useController({ name, control });

  return (
    <div className="text-b-b flex w-full flex-col gap-12 text-16">
      {title}
      <div className="flex gap-40">
        <label htmlFor={label1} className="flex gap-10 font-light">
          <input
            type="radio"
            name={field.name}
            id={label1}
            value={label1}
            onChange={(e) => field.onChange(e.target.value)}
            checked={field.value === label1}
          />
          {label1}
        </label>
        <label htmlFor={label2} className="flex gap-10 font-light">
          <input
            type="radio"
            name={field.name}
            id={label2}
            value={label2}
            onChange={(e) => field.onChange(e.target.value)}
            checked={field.value === label2}
          />
          {label2}
        </label>
      </div>
    </div>
  );
}

export default Radio;
