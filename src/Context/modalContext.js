import {createContext, useContext, useState} from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{isModalOpen, handleOpenModal, handleCloseModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useQuiz must be used within a QuizProvider")
    }

    return context
}