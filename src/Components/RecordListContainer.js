import React, { useState } from 'react';
import styled from 'styled-components';
import RecordListItem from './RecordListItem';
import RecordListDropdown from './RecordListDropdown';

const RecordListContainer = () => {
  // const nickname = '헤드리강';
  // const APIKEY =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiODA1NTY1NDIyIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0NTY5NTU0MSwiZXhwIjoxNjYxMjQ3NTQxLCJpYXQiOjE2NDU2OTU1NDF9.TPyu7LcgdWmibXO7SzSquHdecWt45WgkpANfuepAl58';
  // const fetchUserAccessId = async () => {
  //   fetch(`/kart/v1.0/users/nickname/${encodeURI(nickname)}`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: APIKEY,
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       return data;
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const clickHandler = () => {
  //   const accessId = fetchUserAccessId();
  //   console.log(accessId);
  // };

  return (
    <section>
      <h1>기록 전적 목록</h1>
      <button>fetch</button>
      <ListWrapper>
        <RecordListItem />
        <RecordListItem />
        <RecordListItem />
      </ListWrapper>
    </section>
  );
};

const ListWrapper = styled.ul`
  width: 660px;
  height: auto;
`;

export default RecordListContainer;
