import DarkModeSvg from '../assets/svgs/DarkModeISvg';
import LightModeSvg from '../assets/svgs/LightModeSvg';
import { HasClassName } from '../types/types';

const ThemeToggle = ({ className }: HasClassName) => {
  return (
    <div className={className + ' flex flex-row gap-1'}>
      <DarkModeSvg className="self-center w2" />
      <input type="range" max={1} className="range-input" />
      <LightModeSvg className="self-center" />
    </div>
  );
};

export default ThemeToggle;
