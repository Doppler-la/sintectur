import { createContext, useContext, useState } from 'react'
import ContactoModal from '../components/layout/Nav/ContactoModal'
import CarreraModal from '../components/layout/Nav/CarreraModal'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null)

  const openModal  = (name) => setModal(name)
  const closeModal = ()     => setModal(null)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal === 'contacto' && <ContactoModal onClose={closeModal} />}
      {modal === 'carrera'  && <CarreraModal  onClose={closeModal} />}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
