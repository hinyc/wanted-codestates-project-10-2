import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPage from './Search';
import MachMain from './MachMain';
import { userInfos } from './data';

export default function Maching() {
  const [isOpen, setIsOpen] = useState(false);
  const [battleUser, setBattleUser] = useState('');

  return (
    <>
      {isOpen && (
        <>
          <MachingPage>
            <SearchPage setBattleUser={setBattleUser} userInfos={userInfos} />
            <MachMain battleUser={battleUser} />
          </MachingPage>
          <ModalBackground onClick={() => setIsOpen(false)} />
        </>
      )}
      <button onClick={() => setIsOpen(true)}>Test</button>
    </>
  );
}

const MachingPage = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #1f1f36;
  z-index: 9;
  width: 100%;
  max-width: 800px;
  min-height: 320px;
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
