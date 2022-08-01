import SaveSvg from '../../assets/svgs/SaveSvg';
import Check from '../../assets/svgs/CheckSvg';
import ButtonBox from '../others/ButtonBox';

const SaveDocumentButton = () => {
  return (
    <ButtonBox>
        <SaveSvg className="m-auto" />
        {/* <Check className="m-auto"/> */}
    </ButtonBox>
  );
};

export default SaveDocumentButton;
