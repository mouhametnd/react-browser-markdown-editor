import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import useInputValidation from '../../hooks/useInputValidation';
import { documentSliceActions } from '../../store/slices/DocumentSlice';
import ErrorMessage from '../others/ErrorMessage';
import ModalWrapper from '../others/ModalWrapper';

const { createDocument } = documentSliceActions;
const CreateDocumentButton = () => {
  const dispatch = useDispatch();
  const [shouldOpen, setShouldOpen] = useState(false);
  const openModal = () => setShouldOpen(true);
  const closeModal = () => {
    validator(null);
    setShouldOpen(false);
  };
  const succeedCb = () => {
    const $input = document.getElementById('document-name-input') as HTMLInputElement;
    dispatch(createDocument({ name: $input.value }));
    $input.value = '';
    closeModal();
  };
  const [isValid, validator] = useInputValidation(succeedCb);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const $input = e.currentTarget.querySelector('input') as HTMLInputElement;
    validator($input.value);
  };

  return (
    <>
      <ModalWrapper
        shouldOpen={shouldOpen}
        closeModal={closeModal}
        title="Enter The Document Name"
        description="Enter the name of the document on the input field. You can then rename it using the menu input. "
      >
        {isValid === false && (
          <div className="absolute w-full -top-9 left-0 text-center ">
            <ErrorMessage children="Input is empty !!!" />
          </div>
        )}

        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            id="document-name-input"
            type="text"
            className="w-full p-2 outline-none bg-orange text-white-100 text-xs border-none rounded-md pl-5 placeholder:text-white-100 flex-grow"
            placeholder="Document Name..."
          />
          <button className="p-2 dark:bg-white-100 bg-gray-400 dark:text-gray-500  text-white-100 font-medium text-sm border-none w-28 rounded-md ">
            Create
          </button>
        </form>
      </ModalWrapper>
      <button onClick={openModal} className="bg-orange text-white-100 w-full py-3 font-semibold rounded-md mx-auto">
        + New Document
      </button>
    </>
  );
};

export default CreateDocumentButton;
