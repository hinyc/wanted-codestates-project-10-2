import React, { useState } from 'react';
import styled from 'styled-components';

const Buttons = ({ isSelected, setIsSelected }) => {
  const initState = (idx) => {
    let newArr = [false, false];
    newArr[idx] = true;
    setIsSelected(newArr);
  };
  const setOnClickO = () => {
    initState(0);
  };
  const setOnClickT = () => {
    initState(1);
  };
  return (
    <Wrapper>
      <Button>
        <TeamSelectBtn>
          <Team isSelected={isSelected[0]} onClick={setOnClickO}>
            개인전
          </Team>
          <One isSelected={isSelected[1]} onClick={setOnClickT}>
            팀전
          </One>
        </TeamSelectBtn>
        <SpeedSelectBtn>
          <Total>통합</Total>
        </SpeedSelectBtn>
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 1000px;
  background-color: #005fcc;
`;
const Button = styled.div`
  position: relative;
  height: 45px;
  margin-bottom: 45px;
  /* margin-left: 5rem; */
`;
const TeamSelectBtn = styled.div`
  position: relative;
  top: 20px;
  left: 10px;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 5px;
    right: -12px;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;
const TCommonStyle = styled.span`
  &:hover {
    background-color: #fff;
    color: #005fcc;
  }
  color: #fff;
  vertical-align: middle;
  display: inline-block;
  width: 100px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #fff;
  &:active {
    background-color: #ffffff;
  }
  color: ${({ isSelected }) => (isSelected ? '#005fcc' : '#fff')};
  background-color: ${({ isSelected }) => (isSelected ? '#fff' : '#005fcc')};
`;
const Team = styled(TCommonStyle)`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
`;
const One = styled(TCommonStyle)`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
`;
const SpeedSelectBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 235px;
  display: inline-block;
`;
const SCommonStyle = styled.span`
  &:hover {
    background-color: #ffffff;
    color: #005fcc;
  }
  color: #fff;
  vertical-align: middle;
  display: inline-block;
  width: 36px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #fff;
  &:active {
    background-color: #ffffff;
  }
`;

const Total = styled(SCommonStyle)`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 5px;
  color: #005fcc;
  background-color: #fff;
`;

export default Buttons;
