import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = (props) => {
    setModalOpen(props);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
