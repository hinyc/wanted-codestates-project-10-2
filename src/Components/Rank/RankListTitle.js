import React from 'react';
import styled from 'styled-components';

const RankListTitle = () => {
  return (
    <RankListTitleBox>
      <div className="rank-box">
        <span className="rank-no item">#</span>
        <span className="nickname item">닉네임</span>
        <span className="match-count item">주행횟수</span>
        <span className="avg-rank item">평균순위</span>
      </div>
    </RankListTitleBox>
  );
};

const RankListTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .rank-box {
    width: 1000px;
    height: 50px;
    background-color: transparent;
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 80px;
    margin-top: 30px;
    z-index: 999;

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

export default RankListTitle;
