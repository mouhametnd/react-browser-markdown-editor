import { useDispatch, useSelector, useStore } from 'react-redux';
import '../../css/hamburger.css';
import { asideOpenActions } from '../../store/slices/asideOpenSlice';
import { IStore } from '../../types/types';

const { setAside } = asideOpenActions;

const Hamburger = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setAside());
  const { isAsideOpen } = useSelector(state => state as IStore).asideOpen;

  return (
    <div className="bg-gray-400 w-[75px] py-2">
      <button
        onClick={handleClick}
        className={`hamburger hamburger--emphatic hover:opacity-70 transition-opacity ${isAsideOpen && 'is-active'} `}
        type="button"
      >
        <span className="hamburger-box hamburger__span">
          <span className="hamburger-inner hamburger__span"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
