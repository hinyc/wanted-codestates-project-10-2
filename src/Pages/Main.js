import React, { useEffect, useState } from 'react';

import Summary from '../Components/Summary';

import styled from 'styled-components';
import UserinfoBox from '../Components/UserinfoBox';
import Matching from '../Components/Matching';

import RecordListContainer from '../Components/RecordListContainer';

import OverallRecord from '../Components/Dashboard/OverallRecord';
import RankChangeChartBox from '../Components/Dashboard/RankChangeChart/RankChangeChartBox';
import CheeringMSGBox from '../Components/Dashboard/CheeringMSG/CheeringMSGBox';
import Tabs from '../Components/Tabs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Main({ nickname, matchInfo, setSelectPage }) {
  // integrated = 통합
  // superSpeedy = 매우빠름
  // infinityBooster = 무한부스터
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    {
      name: '통합',
      content: (
        <RecordListContainer nickname={nickname} matchInfo={matchInfo} />
      ),
    },
    { name: '매우빠름', content: '매우빠름' },
    { name: '무한부스터', content: '무한부스터' },
  ];

  useEffect(() => {
    setSelectPage('main');
  }, [setSelectPage]);

  return (
    <Container>
      <OneYear>
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
      </OneYear>
      <UserinfoBox />
      <Matching nickname={nickname} />

      <Dashboard>
        <OverallRecord />
        <RankChangeChartBox matchInfo={matchInfo} />
        <CheeringMSGBox />
      </Dashboard>

      <Tabs
        nickname={nickname}
        matchInfo={matchInfo}
        setCurrentTab={setCurrentTab}
      />
      <SummaryWrapper>
        <Summary nickname={nickname} matchInfo={matchInfo} />
        {menuArr[currentTab].content}
      </SummaryWrapper>
    </Container>
  );
}

const SummaryWrapper = styled.div`
  margin: 0 auto;
  min-width: 1000px;
  display: flex;
  // align-self: flex-start;
`;

const OneYear = styled.div`
  margin: 18px auto;
  padding-left: 7px;

  font-size: 12px;
  letter-spacing: -1px;
  width: 1000px;
  display: flex;
  justify-content: flex-start;

  .icon {
    font-size: 11.5px;
    color: #1f334a;
    margin-right: 7px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  /* height: 3000px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const Dashboard = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
