import { useSelector } from 'react-redux';
import { HasChildren, IStore } from '../types/types';

const showSidebar = (isAsideOpen: boolean) => (isAsideOpen ? 'relative left-[250px]' : ' left-[0px]' )


const Wrapper = ({ children }: HasChildren) => {
  const { asideOpen, theme } = useSelector(state => state as IStore);
  const { isAsideOpen } = asideOpen;
  const { isDarkTheme } = theme;
  console.log();

  return (
    <div className={`${showSidebar(isAsideOpen)} ${isDarkTheme && 'dark'}   sidebar-transition`}>
      {children}
    </div>
  );
};

export default Wrapper;
