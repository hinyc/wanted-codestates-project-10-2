/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

export default function TeamsSelector() {
  const [isSelectSolo, setIsSelectSolo] = useState(true);

  const selectSoloHandler = () => {
    setIsSelectSolo(true);
  };
  const selectTeamHandler = () => {
    setIsSelectSolo(false);
  };

  return (
    <Container>
      <Selector
        className="solo"
        onClick={selectSoloHandler}
        isSelectSolo={isSelectSolo}
      >
        <i className="fa-solid fa-user"></i> 개인전
      </Selector>
      <Selector
        className="team"
        onClick={selectTeamHandler}
        isSelectSolo={!isSelectSolo}
      >
        <i className="fa-solid fa-users"></i> 팀전
      </Selector>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  padding-right: 15px;
  position: relative;
  .solo {
    border-radius: 5px 0 0 5px;
  }
  .team {
    border-radius: 0 5px 5px 0;
  }
  ::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 27px;
    right: 0;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;

const Selector = styled.div`
  text-align: center;
  line-height: 26.4px;
  width: 100.7px;
  height: 26.4px;
  margin-top: 20px;
  border: 0.7px solid #07f;
  background-color: ${(props) => (props.isSelectSolo ? '#07f' : '#fff')};
  color: ${(props) => (props.isSelectSolo ? '#fff' : '#07f')};
  :hover {
    background-color: #07f;
    color: #fff;
    cursor: pointer;
  }
`;
