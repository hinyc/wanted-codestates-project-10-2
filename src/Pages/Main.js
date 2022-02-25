import React from 'react';
import styled from 'styled-components';
import UserinfoBox from '../Components/UserinfoBox';
import Matching from '../Components/Matching';
import OverallRecord from '../Components/Dashboard/OverallRecord';
import RankChangeChartBox from '../Components/Dashboard/RankChangeChart/RankChangeChartBox';
import CheeringMSGBox from '../Components/Dashboard/CheeringMSG/CheeringMSGBox';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <>
      <UserinfoBox username={username} />
      <Matching />

      <Dashboard>
        <OverallRecord />
        <RankChangeChartBox />
        <CheeringMSGBox />
      </Dashboard>
    </>
  );
}

const Dashboard = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
