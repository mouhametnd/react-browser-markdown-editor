
import EditorLeft from './EditorLeft';
import EditorRight from './EditorRight';
import EditorViewToggle from './EditorViewToggle';

const Editor = () => {


  return (
    <section className="relative md:grid grid-cols-2 gap-0 pt-[76px]   ">
      <EditorViewToggle className="fixed right-3 top-[84px] z-50" />

      <EditorLeft />
      <EditorRight />
    </section>
  );
};

export default Editor;
