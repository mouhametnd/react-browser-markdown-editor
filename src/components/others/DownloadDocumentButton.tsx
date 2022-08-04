import DownloadSvg from '../../assets/svgs/DownloadSvg';
import downloadFIle from '../../functions/downloadFile';
import ButtonBox from './ButtonBox';

const DownloadDocumentButton = () => {
  return (
    <ButtonBox handleClick={downloadFIle}>
      <DownloadSvg className="m-auto" />
    </ButtonBox>
  );
};

export default DownloadDocumentButton;
