import { ChangeEvent, useEffect, useState } from 'react';

function useSearchDebounce(onSearch?: (searchTerm: string) => void) {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  
  const handleEraserValue = () => {
    setValue('');
    if(onSearch) {
      onSearch('')
    }
  }

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000); // 1초 대기

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(debouncedValue);
    }
  };

  return { value, handleInputChange, handleSearch, handleEraserValue };
}

export default useSearchDebounce;
