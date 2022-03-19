import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RankChangeChart from './RankChangeChart';

const RankChangeChartBox = () => {
  const matchInfo = useSelector((state) => state.userInfo.matches[0].matches);

  const matches = matchInfo.map((el) => {
    if (el.player.matchRank === '99' || el.player.matchRank === '') return 8;
    return Number(el.player.matchRank);
  });

  const matches200 = matches.slice(0, 200);

  const matches50 = matches.slice(0, 50);

  const avgMatches200 = matches200.reduce((a, b) => a + b) / matches200.length;
  const avgMatches50 = matches50.reduce((a, b) => a + b) / matches50.length;

  return (
    <>
      <Container>
        <Title>
          <div>
            <span className="blue">순위변동</span>
            <span>추이</span>
          </div>
          <div>
            <span className="twoTitle">지난200경기</span>
            <span className="blue">
              {' '}
              {Math.round(avgMatches200 * 100) / 100}위
            </span>
          </div>
          <div>
            <span className="twoTitle">최근50경기</span>
            <span className="blue">
              {' '}
              {Math.round(avgMatches50 * 100) / 100}위
            </span>
          </div>
        </Title>
        <GrapeContainer>
          <RankChangeChart recent50matches={matches50} />
        </GrapeContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 10px;
  border: 1px solid #f2f2f2;
  background-color: #fff;
  width: 326.66px;
  height: 266px;
`;

const Title = styled.div`
  height: 20%;
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
  font-weight: bold;
  height: 41px;
  margin: 0 12px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .twoTitle {
    font-size: 0.7rem;
  }

  .blue {
    color: #0077ff;
    margin-right: 5px;
    font-size: 0.7rem;
    :first-child {
      font-size: 0.9rem;
    }
  }
`;

const GrapeContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  padding: 10px 17px 0 17px;
`;

export default RankChangeChartBox;
