import React from 'react';
import EditorLeft from './EditorLeft';
import EditorRight from './EditorRight';
import EditorViewToggle from './EditorViewToggle';

const Editor = () => {
  return (
    <section className="relative md:grid grid-cols-2 gap-0 ">
      <EditorViewToggle className="absolute right-3 top-[10px]" />

      <EditorLeft />
      <EditorRight />
    </section>
  );
};

export default Editor;
