interface HasChildren {
  children: React.ReactNode;
}

const ButtonBox = ({ children }: HasChildren) => {
  return <button className="bg-orange w-12 h-12 hover:bg-orange/70 transition-colors self-center flex rounded-md">{children}</button>;
};

export default ButtonBox;
