import React from 'react';
import styled from 'styled-components';

const RankCard = ({ match, id }) => {
  const nickName = match.nickName;
  const matchCount = match.matches[0].matches.length;
  const avgRank =
    match.matches[0].matches.reduce((acc, cur) => {
      return acc + Number(cur.player.matchRank);
    }, 0) / matchCount;
  console.log(nickName, matchCount, avgRank, id);

  return (
    <RankCardContainer>
      <li className="rank-list">
        <div className="rank-box">
          <span className="rank-no">{id + 1}</span>
          <span className="nickname">
            <a href="#">{nickName}</a>
            <span className="updown up">
              <i className="fas fa-angle-up"></i>
            </span>
          </span>
          {/* <span className="point">3,068&nbsp;&nbsp;PT</span> */}
          <span className="match-count">{matchCount}회</span>
          <span className="avg-rank">{avgRank}위</span>
        </div>
      </li>
    </RankCardContainer>
  );
};

const RankCardContainer = styled.div`
  .rank-list {
    list-style: none;
  }
  .rank-box {
    width: 100%;
    height: 40px;
    background-color: white;
    border: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
  }
  .rank-no {
    text-align: center;
  }
`;

export default RankCard;
