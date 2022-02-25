import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ConditionBarPage from './ContionBarPage';
import Race from './Race';

export default function ConditionPage({ user, battleUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickGame = () => {
    if (battleUser) {
      setIsOpen(true);
    } else {
      alert('유저없어');
    }
  };

  return (
    <Condition>
      <p className="title">컨디션</p>
      <ConditionBarPage user={user} />
      <ConditionBarPage battleUser={battleUser} />
      <div className="fight_btn">
        <button onClick={onClickGame}>Fight</button>
      </div>
      {isOpen && (
        <>
          <Race user={user} battleUser={battleUser} />
          <ModalBackground onClick={() => setIsOpen(false)} />
        </>
      )}
    </Condition>
  );
}

const Condition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #3a4259;
  height: 200px;
  .title {
    margin: 20px 0 0 10px;
    color: white;
    font-size: 14px;
    text-align: left;
  }
  .fight_btn {
    display: flex;
    justify-content: center;
    width: 100%;
    button {
      width: 100px;
      height: 30px;
      margin-top: 10px;
      border-radius: 20px;
      border: none;
      background-color: #3975f9;
      color: #ffffff;
      text-align: center;
      box-shadow: 2px 2px 1px 1px #000000;
    }
    button:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
`;
