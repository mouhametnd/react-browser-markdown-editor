import parser from 'html-react-parser';
import '../../css/editor.css'
import { useSelector } from 'react-redux';
import { IStore } from '../../types/types';
import EditorSide from './EditorSide';

const EditorRight = () => {
  const { html } = useSelector(state => state as IStore).content;
  return (
    <EditorSide title="PREVIEW" >
      <div id="ouput-html" className='editor-right'>{parser(html)}</div>
    </EditorSide>
  );
};

export default EditorRight;
