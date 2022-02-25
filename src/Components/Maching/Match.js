import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPage from './Search';
import MachMain from './MachMain';
import { userInfos } from './data';

export default function Match() {
  const [battleUser, setBattleUser] = useState('');
  return (
    <>
      <MachingPage>
        <SearchPage setBattleUser={setBattleUser} userInfos={userInfos} />
        <MachMain battleUser={battleUser} />
      </MachingPage>
    </>
  );
}

const MachingPage = styled.div`
  position: fixed;
  top: 50px;
  right: 100px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #1f1f36;
  z-index: 9;
  width: 100%;
  max-width: 800px;
  min-height: 500px;
`;
