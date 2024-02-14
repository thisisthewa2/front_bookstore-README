import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function useFormControl(option ?:  string | number | boolean) {
  const { control, handleSubmit, watch } = useForm({ mode: 'onChange' });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const value = Object.values(watch()).every((el) => el);

  useEffect(() => {
    if (value && option) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    } 
  }, [option, value])

  //TODO:폼보낼 함수
  const onSubmit = () => {
    console.log('폼보내짐')
  }
  return { control, handleSubmit, isButtonActive, onSubmit}
}

export default useFormControl