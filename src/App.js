import { useState } from 'react';
import Modal from './Modal'
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
      <div className="button" onClick={toggleShowModal}>Open Modal</div>
    </div>
  );
}

export default App;
