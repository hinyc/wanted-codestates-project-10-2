import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ setModalState }) => {
  const [state, setState] = useState(true);
  const toggleState = () => {
    setModalState(false);
    setState(!state);
  };

  return (
    <div>
      {state && (
        <>
          <ModalBackground onClick={toggleState} />
          <ModalWindow>
            <CloseBtn onClick={toggleState}>X</CloseBtn>
          </ModalWindow>
        </>
      )}
    </div>
  );
};

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #303030;
  opacity: 0.5;
  z-index: 10;
`;
const ModalWindow = styled.div`
  display: flex;
  z-index: 10;
  flex-direction: column;
  width: 800px;
  height: 700px;
  border-radius: 0.5rem;
  background: url('https://tmi.nexon.com/img/assets/guide_desc.png')
    center/cover no-repeat;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #000000;
  background-color: transparent;
  border: 0;
  font-size: 1.3rem;
  border: 1px solid #eee;
  cursor: pointer;
`;
export default Modal;
