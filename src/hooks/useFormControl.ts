import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { UseMutationResult } from '@tanstack/react-query';

interface FormData {
  option?: number;
  [key: string]: any; // 추가적인 동적 프로퍼티를 허용
}

interface UseFormControl {
  postFn: (data: FormData) => UseMutationResult<any, Error, void, void>;
  putFn?: (putFormData: FormData) => UseMutationResult<any, Error, void, void>;
  edit?: boolean;
  bookId: number;
  option?: { required?: number; optional?: number };
  onClick: () => void;
  initialValue?: {};
}

function useFormControl ({
  postFn,
  putFn,
  edit,
  bookId,
  option,
  onClick,
  initialValue,
}: UseFormControl) {
  const { control, handleSubmit, watch, getValues } = useForm({
    mode: 'onSubmit',
    defaultValues: initialValue || {},
  });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const value = Object.values(watch()).every((el) => el);
  const content = getValues();

  const postFormData = {
    option: option?.required,
    bookId,
    ...content,
  };
  
  const putFormData = {
    option: option?.optional,
    required: option?.required,
    ...content,
  };
  
  const mutation = (edit && putFn) ? putFn(putFormData) : postFn(postFormData);

  const onSubmit = () => {
    mutation.mutate();
    onClick();
  };

  useEffect(() => {
    setIsButtonActive(option ? value && !!option : value);
  }, [option, value]);

  return { control, handleSubmit, isButtonActive, onSubmit };
}

export default useFormControl;
