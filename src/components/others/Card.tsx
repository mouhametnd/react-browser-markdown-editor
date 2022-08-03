import React from 'react';
import CloseSvg from '../../assets/svgs/CloseSvg';

interface ICardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  closeCb?: () => void;
}

const Card = ({ children, description, title, closeCb }: ICardProps) => {
  return (
    <div className="relative m-auto  w-80 min-h-[200px] p-6 rounded-lg dark:bg-gray-400 bg-white-100 flex flex-col gap-3">
      <button onClick={closeCb} className="absolute top-4 right-6  p-2 ">
        <CloseSvg />
      </button>

      <h4 className="dark:text-white-100 text-black-0 font-Sec text-xl font-semibold text-center pt-6 tracking-wide">{title}</h4>
      <p className="font-Sec text-gray-200 font-normal text-sm text-center ">{description}</p>
      {children}
    </div>
  );
};

export default Card;
