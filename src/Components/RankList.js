import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankCard from './RankCard';

const RankList = (props) => {
  const { matchList } = props;
  return (
    <RankListContainer>
      {matchList.map((match, id) => (
        <RankCard match={match} rank={id} key={id} />
      ))}
    </RankListContainer>
  );
};

const RankListContainer = styled.div`
  background-color: #faf9f9;

  min-width: 1000px;


  .list-header-container{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    background-color: rgba(78, 136, 203, 0.5)
  }
  .list-header {
    width: 1000px;
    height: 50px;
    background-color:     border: 1px solid #f5f5f5;
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

export default RankList;
