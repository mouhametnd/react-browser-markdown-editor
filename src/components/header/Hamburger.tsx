import '../../css/hamburger.css';

const Hamburger = () => {
  return (
    <div className='bg-gray-400 w-[75px] py-2'>
      <button className={`hamburger hamburger--emphatic `} type="button">
        <span className="hamburger-box hamburger__span">
          <span className="hamburger-inner hamburger__span"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
