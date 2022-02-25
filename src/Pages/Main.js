import React from 'react';
import styled from 'styled-components';
import UserinfoBox from '../Components/UserinfoBox';
import Matching from '../Components/Matching';

import RecordListContainer from '../Components/RecordListContainer';

import OverallRecord from '../Components/Dashboard/OverallRecord';
import RankChangeChartBox from '../Components/Dashboard/RankChangeChart/RankChangeChartBox';
import CheeringMSGBox from '../Components/Dashboard/CheeringMSG/CheeringMSGBox';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <>
      <InfoComponent />
      <Container>
        <UserinfoBox username={username} />
        <Matching />

        <Dashboard>
          <OverallRecord />
          <RankChangeChartBox />
          <CheeringMSGBox />
        </Dashboard>

        <RecordListContainer />
      </Container>
    </>
  );
}

function InfoComponent() {
  return (
    <Info>
      <i className="fa-solid fa-circle-info"></i> 카트라이더 매치데이터는 최근
      1년차 데이터만 확인할 수 있습니다
    </Info>
  );
}

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dashboard = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  color: #1f334a;
  font-size: 12px;
`;
