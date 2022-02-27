import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import RankCard from './RankCard';

const PAGE_NUMBER = 10;

const RankList = (props) => {
  const targetRef = useRef(null);
  const [page, setPage] = useState(PAGE_NUMBER);
  const { matchList } = props;
  const newMatchLIst = matchList.slice(0, page);

  const callback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) setPage(page + 10);
    },
    [newMatchLIst],
  );

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [callback]);

  return (
    <RankListContainer>
      {newMatchLIst.map((match, id) => (
        <RankCard
          match={match}
          rank={id}
          key={id}
          ref={id + 3 === newMatchLIst.length ? targetRef : undefined}
        />
      ))}
    </RankListContainer>
  );
};

const RankListContainer = styled.div`
  background-color: #faf9f9;

  min-width: 1000px;

  .list-header-container {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    background-color: rgba(78, 136, 203, 0.5);
  }
  .list-header {
    width: 1000px;
    height: 50px;
    background-color: transparent;
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

export default RankList;
