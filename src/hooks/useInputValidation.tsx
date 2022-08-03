import { useState } from 'react';

type TUseInputValidation = (value: {
  succeedCb?: (value: string) => unknown;
  rejectedCb?: (value: string) => unknown;
}) => [boolean | null, (a: string | null) => unknown];

const useInputValidation: TUseInputValidation = ({ succeedCb, rejectedCb }) => {
  const [isValid, setIsValid] = useState<null | boolean>(null);

  const validator = (value: string | null) => {
    if (value === null) return setIsValid(null);

    if (!value.trim()) {
      setIsValid(false);
      if (typeof rejectedCb === 'function') rejectedCb(value);
      return;
    }
    
    setIsValid(true);
    if (typeof succeedCb === 'function') succeedCb(value);
    setIsValid(null);
  };

  return [isValid, validator];
};

export default useInputValidation;
