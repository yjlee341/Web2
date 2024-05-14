import { useState } from "react";
import ReactModal from "react-modal";

interface Props {
  children: JSX.Element;
  switchModal: () => void;
  isOpen: boolean;
}

export default function Modal({ children, switchModal, isOpen }: Props) {
  function closeModal() {}

  return (
    <div className="flex flex-col items-center justify-center">
      <ReactModal
        shouldCloseOnOverlayClick={false}
        isOpen={isOpen}
        onRequestClose={switchModal}
        className=" flex flex-col items-center justify-center bg-white rounded-md p-5"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        {children}
        <div className="w-full text-center mt-4">
          <button
            onClick={switchModal}
            className="hover:cursor-pointer bg-red-700 rounded-md text-white h-10 font-bold w-1/5 m-3"
          >
            닫기
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
