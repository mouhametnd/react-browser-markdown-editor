import HidePreviewSvg from '../../assets/svgs/HidePreviewSvg';
import ShowPreviewSvg from '../../assets/svgs/ShowPreview';
import { HasClassName } from '../../types/types';

interface IProps extends HasClassName {
  handleClick: () => void;
  hideEditorLeft: boolean;
}

const EditorViewToggle = ({ hideEditorLeft, handleClick, className = '' }: IProps) => {
  return (
    <button onClick={handleClick} className={`${className} bg-black-hover hover:bg-gray-300/30`}>
      {hideEditorLeft ? <HidePreviewSvg /> : <ShowPreviewSvg />}
    </button>
  );
};

export default EditorViewToggle;
