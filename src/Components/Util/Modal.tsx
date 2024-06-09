import { useState } from "react";
import ReactModal from "react-modal";

interface Props {
  children: JSX.Element;
  switchModal: () => void;
  isOpen: boolean;
}

export default function Modal({ children, switchModal, isOpen }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <ReactModal
        shouldCloseOnOverlayClick={false}
        isOpen={isOpen}
        onRequestClose={switchModal}
        className="flex flex-col items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        {children}
      </ReactModal>
    </div>
  );
}
