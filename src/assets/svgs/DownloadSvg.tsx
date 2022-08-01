import { HasClassName } from '../../types/types';

const DownloadSvg = ({className = ''}:HasClassName) => {
  return (
    <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"  className={`w-7 fill-white-100 ${className}`}>
      <path  d="M256,409.7,152.05,305.75,173.5,284.3l67.33,67.32V34h30.34V351.62L338.5,284.3,360,305.75ZM445.92,351v93.22a3.61,3.61,0,0,1-3.47,3.48H69.15a3.3,3.3,0,0,1-3.07-3.48V351H35.74v93.22A33.66,33.66,0,0,0,69.15,478h373.3a33.85,33.85,0,0,0,33.81-33.82V351Z" />
    </svg>
  );
};

export default DownloadSvg;
