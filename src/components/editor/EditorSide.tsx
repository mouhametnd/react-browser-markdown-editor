import React from 'react';
interface IEditorSideProps {
  title: string;
  children: React.ReactNode;
}

const EditorSide = ({ children, title }: IEditorSideProps) => {
  return (
    <section className="h-full ">
      <span className="dark:bg-black-200  bg-white-200 text-gray-300 py-3 px-2  tracking-wider font-normal w-full inline-block  fixed transition-colors">
        {title}
      </span>
      <div
        className={` dark:bg-black-400 bg-white-100  w-full h-full border-solid border-r-gray-700  px-4 py-4 transition-colors pt-16`}
      >
        {children}
      </div>
    </section>
  );
};

export default EditorSide;
