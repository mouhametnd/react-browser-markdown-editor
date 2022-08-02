import { useEffect, useState } from 'react';

type TUseInputValidation = (cb?: () => unknown) => [boolean | null, (a: string | null) => unknown];

const useInputValidation: TUseInputValidation = succeedCb => {
  const [isValid, setIsValid] = useState<null | boolean>(null);

  const validator = (value: string | null) => {
    if (value === null) setIsValid(null);
    else value.trim() ? setIsValid(true) : setIsValid(false);
  };

  useEffect(() => {
    if (!isValid) return;
    if(typeof succeedCb === 'function') succeedCb();
    setIsValid(null);
  }, [isValid]);

  return [isValid, validator];
};

export default useInputValidation;
