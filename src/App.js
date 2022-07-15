import { useState } from 'react';
import Modal from './Modal'
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <Modal show={showModal} onCloseButtonClick={closeModal} />
      <div className="button" onClick={openModal}>Open Modal</div>
    </div>
  );
}

export default App;
