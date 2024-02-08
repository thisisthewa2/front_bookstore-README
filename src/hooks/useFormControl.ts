import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function useFormControl() {
  const { control, handleSubmit, watch } = useForm({ mode: 'onChange' });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    if (watch('description') && newRating) {

      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    } 
  }, [newRating, watch('description')])

  //TODO:폼보낼 함수
  const onSubmit = () => {
    console.log('폼보내짐')
  }
  return { control, handleSubmit, isButtonActive, newRating, setNewRating, onSubmit}
}

export default useFormControl