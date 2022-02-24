import React from 'react';
import styled from 'styled-components';

const Buttons = () => {
  return (
    <Wrapper>
      <Button>
        <TeamSelectBtn>
          <Team>개인전</Team>
          <One>팀전</One>
        </TeamSelectBtn>
        <SpeedSelectBtn>
          <Total>통합</Total>
          <Fast>매빠</Fast>
          <Infinity>무부</Infinity>
        </SpeedSelectBtn>
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background-color: #005fcc;
`;
const Button = styled.div`
  position: relative;
  height: 45px;
  margin-bottom: 45px;
  min-width: 800px;
  margin-left: 1rem;
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
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
`;
const Fast = styled(SCommonStyle)`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 0 0 0 0;
`;
const Infinity = styled(SCommonStyle)`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
`;
export default Buttons;
