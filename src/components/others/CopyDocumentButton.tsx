import CopySvg from '../../assets/svgs/CopySvg';
import copyToClipBoard from '../../functions/copyToClipboard';
import ButtonBox from './ButtonBox';

const CopyDocumentButton = () => {
  return (
    <ButtonBox handleClick={copyToClipBoard} >
      <CopySvg className="m-auto" />
    </ButtonBox>
  );
};

export default CopyDocumentButton;
