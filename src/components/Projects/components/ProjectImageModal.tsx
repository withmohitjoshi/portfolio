import React from "react";
import Modal from "react-modal";
const ProjectImageModal = ({
  children,
  modalInfo,
  setModalInfo,
}: {
  children: JSX.Element;
  modalInfo: {
    isOpen: boolean;
    src: string;
  };
  setModalInfo: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      src: string;
    }>
  >;
}) => {
  return (
    <>
      <Modal
        isOpen={modalInfo.isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() =>
          setModalInfo((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
          }))
        }
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        className="static border-none bg-transparent outline-none flex justify-center items-center"
        contentLabel="Modal"
        preventScroll={true}
      >
        {children}
      </Modal>
    </>
  );
};

export default ProjectImageModal;
