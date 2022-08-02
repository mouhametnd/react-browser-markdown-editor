import React from 'react';
import CloseSvg from '../../assets/svgs/CloseSvg';

interface IModalProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const ModalWrapper = ({ children, description, title }: IModalProps) => {
  return (
    <section className="fixed top-0 left-0 flex w-screen h-screen bg-black-500 z-50">
      <div className="relative m-auto  w-80 min-h-[200px] p-6 rounded-lg dark:bg-gray-400 bg-white-100 flex flex-col gap-3">
        <button className="absolute top-3.5 right-6 w-2.5 h-5 p-2">
          <CloseSvg />
        </button>

        <h4 className="dark:text-white-100 text-black-0 font-Pri text-xl font-semibold text-center">{title}</h4>
        <p className="font-Sec text-gray-200 font-normal text-sm text-center">{description}</p>
        {children}
        
      </div>
    </section>
  );
};
export default ModalWrapper;
