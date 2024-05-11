import { useState } from "react";
import ReactModal from "react-modal";

interface Props {
  children: JSX.Element;
}

export default function Modal({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    if (window.confirm("취소하시겠습니까?")) {
      setIsOpen(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        shouldCloseOnOverlayClick={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        className=" flex flex-col items-center justify-center bg-white rounded-md p-5"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        {children}
        <div className="w-full text-center mt-4">
          <button
            onClick={closeModal}
            className="hover:cursor-pointer bg-red-700 rounded-md text-white h-10 font-bold w-1/5 m-3"
          >
            닫기
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
