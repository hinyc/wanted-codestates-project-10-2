import React from 'react';
import styled from 'styled-components';

const RankCard = ({ match, rank }) => {
  const { id, matchCount, avgRank, winP, retireP } = match;

  return (
    <RankCardContainer>
      <li className="rank-list">
        <div className="rank-box">
          <span className="rank-no item">{rank + 4}</span>
          <span className="nickname item">
            <a href="#">{id}</a>
          </span>
          <span className="match-count item">{matchCount}회</span>
          <span className="avg-rank item">{Number(avgRank).toFixed(1)}위</span>
        </div>
      </li>
    </RankCardContainer>
  );
};

const RankCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .rank-list {
    list-style: none;
  }
  .rank-box {
    width: 1000px;
    height: 50px;
    background-color: white;
    border: 1px solid #f5f5f5;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 10px 0;
    padding-left: 80px;

    .item {
      display: inline-block;
    }
    .rank-no {
      width: 20%;
    }
    .nickname {
      width: 40%;
    }
    .match-count {
      width: 20%;
    }
    .avg-rank {
      width: 20%;
    }
  }
`;

export default RankCard;
