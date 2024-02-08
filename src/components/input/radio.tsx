import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface RadioProps {
  label: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  title1: string;
  title2: string;
}

function Radio({ label, control, name, title1, title2 }: RadioProps) {
  const { field } = useController({name, control})

  return (
    <div className="flex flex-col w-full gap-12">
      <label htmlFor={field.name} className="text-16 text-b-b">
        {label}
      </label>
      <input type='radio' name={field.name} value={title1}  />
      <input type='radio' name={field.name} value={title2}/>
    </div>
  )
}

export default Radio