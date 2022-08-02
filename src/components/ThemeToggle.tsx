import DarkModeSvg from '../assets/svgs/DarkModeISvg';
import LightModeSvg from '../assets/svgs/LightModeSvg';
import { HasClassName } from '../types/types';
import useTheme from '../hooks/useTheme';
import { ChangeEventHandler } from 'react';

const ThemeToggle = ({ className }: HasClassName) => {
  const [isDarkTheme, changeInputValue, setTheme] = useTheme();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const value = !!e.target.valueAsNumber;
    setTheme(value);
  };

  return (
    <div className={className + ' flex flex-row gap-1'}>
      <button onClick={() => changeInputValue(false)}>
        <LightModeSvg className={` fill-gray-300  self-center ${!isDarkTheme && 'svg-fill-white'}`} />
      </button>

      <input type="range" max={1} className="range-input" onChange={handleChange} />

      <button onClick={() => changeInputValue(true)}>
        <DarkModeSvg className={`fill-gray-300  self-center ${isDarkTheme && 'svg-fill-white'}`} />
      </button>
    </div>
  );
};

export default ThemeToggle;
