import React from 'react';
import styled from 'styled-components';
import RankChangeChart from './RankChangeChart';

const RankChangeChartBox = ({ matchInfo }) => {
  const recent50matches = matchInfo[0].matches
    .filter(
      (match) =>
        match.player.matchRank !== '' && match.player.matchRank !== '99',
    )
    .slice(0, 50);

  const recent200matches = matchInfo[0].matches.filter(
    (match) => match.player.matchRank !== '' && match.player.matchRank !== '99',
  );

  const const200matchesRank =
    recent200matches
      .map((el) => Number(el.player.matchRank))
      .reduce((a, b) => a + b) / 184;

  const const50matchesRank =
    recent50matches
      .map((el) => Number(el.player.matchRank))
      .reduce((a, b) => a + b) / 50;

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
              {Math.round(const200matchesRank * 100) / 100}위
            </span>
          </div>
          <div>
            <span className="twoTitle">최근50경기</span>
            <span className="blue">
              {' '}
              {Math.round(const50matchesRank * 100) / 100}위
            </span>
          </div>
        </Title>
        <GrapeContainer>
          <RankChangeChart recent50matches={recent50matches} />
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
