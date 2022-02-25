import React, { useState } from 'react';
import styled from 'styled-components';
import ComparePage from './ComparePage';
import ConditionPage from './ConditionPage';

export default function MachMain({ battleUser }) {
  const [user, setUser] = useState({
    id: 1,
    name: '배찌',
    charImg:
      'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png',
    cartImg:
      'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/751a4dd7b0e66ba60c3feb72191980bfed2eac7068930521c59171a514fff837.png?v=1645682865',
  });

  return (
    <MachMainPage>
      <ComparePage user={user} battleUser={battleUser} />
      <ConditionPage battleUser={battleUser} />
    </MachMainPage>
  );
}

const MachMainPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f1f36;
`;
