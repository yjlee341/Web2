import ReactModal from "react-modal";
import ModalButton from "../Booth/Regist/Location/ModalButton";

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
        className="flex flex-col bg-white p-4 items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        {children}
        <div className="flex justify-center gap-4 mt-4 w-full">
          <ModalButton
            action={() => {
              switchModal();
            }}
            color="blue-500"
            text="확인"
          />
          <ModalButton
            action={() => {
              switchModal();
            }}
            color="red-500"
            text="취소"
          />
        </div>
      </ReactModal>
    </div>
  );
}
