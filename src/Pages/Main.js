import React from 'react';

import Summary from '../Components/Summary';

import styled from 'styled-components';
import UserinfoBox from '../Components/UserinfoBox';
import Matching from '../Components/Matching';

import RecordListContainer from '../Components/RecordListContainer';

import OverallRecord from '../Components/Dashboard/OverallRecord';
import RankChangeChartBox from '../Components/Dashboard/RankChangeChart/RankChangeChartBox';
import CheeringMSGBox from '../Components/Dashboard/CheeringMSG/CheeringMSGBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <>
      {/* <InfoComponent /> */}
      <OneYear>
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
      </OneYear>
      <Container>
        <UserinfoBox username={username} />
        <Matching />

        <Dashboard>
          <OverallRecord />
          <RankChangeChartBox />
          <CheeringMSGBox />
        </Dashboard>
        <SummaryWapper>
          <Summary />
          <RecordListContainer />
        </SummaryWapper>
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

const SummaryWapper = styled.div`
  width: 1000px;
  display: flex;
`;

const OneYear = styled.div`
  margin: 15px auto;
  padding-left: 15px;
  font-size: 12px;
  letter-spacing: -1px;
  width: 1000px;
  display: flex;
  justify-content: center;

  .icon {
    font-size: 11.5px;
    color: #1f334a;
    margin-right: 7px;
  }
`;

const Container = styled.div`
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
