import React from 'react';
import styled from 'styled-components';
import RankChangeChart from '../Components/RankChangeChart';
import Matching from '../Components/Matching';

export default function Main() {
  return (
    <>
      <Box>
        <RankChangeChart />
        <Matching />
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
