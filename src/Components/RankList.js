import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankCard from './RankCard';

const RankList = (props) => {
  const { matchList } = props;
  return (
    <RankListContainer>
      {matchList.map((match, id) => (
        <>
          <RankCard match={match} rank={id} />
        </>
      ))}
    </RankListContainer>
  );
};

const RankListContainer = styled.div`
  background-color: #faf9f9;
  min-width: 1000px;
`;

export default RankList;
