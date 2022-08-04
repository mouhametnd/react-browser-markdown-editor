interface HasChildren {
  children: React.ReactNode;
}
interface IProps extends HasChildren {
  handleClick: () => void;
}

const ButtonBox = ({ children, handleClick }: IProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-orange w-12 h-12 hover:bg-orange/70 transition-colors self-center flex rounded-md active:bg-orange/40"
    >
      {children}
    </button>
  );
};

export default ButtonBox;
