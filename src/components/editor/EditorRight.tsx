import parser from 'html-react-parser';
import '../../css/editor.css';
import { useSelector } from 'react-redux';
import { IHideEditorLeft, IStore } from '../../types/types';
import EditorSide from './EditorSide';

const EditorRight = ({ hideEditorLeft }: IHideEditorLeft) => {
  const { html } = useSelector(state => state as IStore).content;
  return (
    <EditorSide title="PREVIEW">
      <div id="output-html" className={` mdmax:${hideEditorLeft || 'hidden'}  editor-right max-w-[1024px] mx-auto`}>
        {parser(html)}
      </div>
    </EditorSide>
  );
};

export default EditorRight;
