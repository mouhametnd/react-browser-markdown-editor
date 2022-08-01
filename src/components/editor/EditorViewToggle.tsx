import HidePreviewSvg from '../../assets/svgs/HidePreviewSvg';
import ShowPreviewSvg from '../../assets/svgs/ShowPreview';
import { HasClassName } from '../../types/types';

const EditorViewToggle = ({ className = '' }: HasClassName) => {
  return (
    <button className={`${className} bg-black-hover hover:bg-gray-300/30`}>
      {/* <HidePreviewSvg  /> */}
      <ShowPreviewSvg />
    </button>
  );
};

export default EditorViewToggle;
