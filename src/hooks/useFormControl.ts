import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { UseMutationResult } from '@tanstack/react-query';

export interface FormData {
  required?: number | string ;
  optional?: number | string;
  id?: number;
  [key: string]: any; // 추가적인 동적 프로퍼티를 허용
}

interface UseFormControl {
  postFn?: (data: FormData) => UseMutationResult<any, Error, void, void>;
  putFn?: (putFormData: FormData) => UseMutationResult<any, Error, void, void>;
  edit?: boolean;
  id: number;
  option?: { required?: number | string; optional?: number | string };
  onClick: () => void;
  initialValue?: {};
}

function useFormControl ({
  postFn,
  putFn,
  edit,
  id,
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
    required: option?.required,
    option: option?.optional,
    id,
    ...content,
  };
  
  const putFormData = {
    required: option?.required,
    option: option?.optional,
    id,
    ...content,
  };

  const mutation = (edit && putFn) ? putFn(putFormData) : postFn ? postFn(postFormData) : null;

  const onSubmit = () => {
    mutation?.mutate();
    onClick();
  };

  useEffect(() => {
    setIsButtonActive(option ? value && !!option : value);
  }, [option, value]);

  return { control, handleSubmit, isButtonActive, onSubmit };
}

export default useFormControl;
