import { HasChildren } from '../types/types';

const Wrapper = ({ children }: HasChildren) => {
return <div className="dark">{children}</div>;
};

export default Wrapper;
