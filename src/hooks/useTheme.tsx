import { ChangeEventHandler, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSliceActions } from '../store/slices/themeSlice';
import { IStore } from '../types/types';

const { toggleTheme } = themeSliceActions;

const setInputValue = (value: boolean) => {
  const $input = document.querySelector('input[type="range"]') as HTMLInputElement;

  $input.value = value ? '1' : '0';
};

type TUseTheme = [boolean, (a: boolean) => void, (a: boolean) => void];


const useTheme = (): TUseTheme => {
  const dispatch = useDispatch();
  const setTheme = (value: boolean) => dispatch(toggleTheme(value));

  const { isDarkTheme } = useSelector(state => state as IStore).theme;

  const changeInputValue = (value: boolean) => {
    setInputValue(value);
    setTheme(value);
  };

  useEffect(() => {
    setInputValue(isDarkTheme);
  }, []);

  return [isDarkTheme, changeInputValue, setTheme];
};

export default useTheme;
