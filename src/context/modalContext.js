import { createContext, useState } from "react";

export const ModalContext = createContext({})

export const ModalContextProvider = ({children}) => {

  const [ isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen)  
  
  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal }}> 
      {children}
    </ModalContext.Provider>
  );
}