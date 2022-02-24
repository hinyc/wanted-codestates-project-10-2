import React from 'react';
import Summary from '../Components/Summary';

import styled from 'styled-components';

import OverallRecord from '../Components/OverallRecord';
import UserinfoBox from '../Components/UserinfoBox';
import RankChangeChart from '../Components/RankChangeChart';
import Matching from '../Components/Matching';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <>
      <UserinfoBox username={username} />
      <Matching />
      <OverallRecord />

      <Box>
        <Summary />
        <RankChangeChart />
      </Box>
    </>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
