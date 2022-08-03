import { useState } from 'react';
import EditorLeft from './EditorLeft';
import EditorRight from './EditorRight';
import EditorViewToggle from './EditorViewToggle';

const Editor = () => {
  const [hideEditorLeft, setHideEditorLeft] = useState(false);
  const toggleClick = () => setHideEditorLeft(prevState => !prevState);


  return (
    <section className={`${!hideEditorLeft && 'grid-cols-2'} relative md:grid gap-0 pt-[76px] `}>
      <EditorViewToggle className="fixed right-3 top-[84px] z-50" handleClick={toggleClick} hideEditorLeft={hideEditorLeft}  />

      <EditorLeft hideEditorLeft={hideEditorLeft} />
      <EditorRight hideEditorLeft={hideEditorLeft}/>
    </section>
  );
};

export default Editor;
