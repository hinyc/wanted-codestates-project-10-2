import React from 'react';

import styled from 'styled-components';

import OverallRecord from '../Components/OverallRecord';
import UserinfoBox from '../Components/UserinfoBox';
import RankChangeChart from '../Components/RankChangeChart';
import Matching from '../Components/Matching';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <>
      <InfoComponent />
      <Container>
        <UserinfoBox username={username} />
        <Matching />
        <OverallRecord />

        <Box>
          <RankChangeChart />
        </Box>
      </Container>
    </>
  );
}

function InfoComponent() {
  return (
    <Info>
      <i class="fa-solid fa-circle-info"></i> 카트라이더 매치데이터는 최근 1년차
      데이터만 확인할 수 있습니다
    </Info>
  );
}

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Info = styled.div`
  color: #1f334a;
  font-size: 12px;
`;
