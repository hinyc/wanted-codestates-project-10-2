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
  height: 200vh;
  top: 0;
  background-color: #303030;
  opacity: 0.5;
  z-index: 10;
  min-width: 1000px;
`;
const ModalWindow = styled.div`
  z-index: 10;
  height: 700px;
  min-width: 1000px;
  background: url('https://tmi.nexon.com/img/assets/guide_desc.png')
    center/cover no-repeat;
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
  border-radius: 50%;
  padding: 8px 12px;
  cursor: pointer;
`;
export default Modal;
