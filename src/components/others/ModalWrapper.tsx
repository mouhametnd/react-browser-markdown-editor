import Card from './Card';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
  closeCb: () => void;
  shouldOpen: boolean;
}

const ModalWrapper = (props: IModalProps) => {
  return (
    <section
      className={`${props.shouldOpen || 'hidden'}  fixed top-0 left-0 flex w-screen h-screen bg-black-500 z-50 `}
    >
      <Card {...props} />
    </section>
  );
};
export default ModalWrapper;
