import React from 'react';
import styled from 'styled-components';

const RankerInfo = ({ imgSrc }) => {
  return (
    <RankerWrapper>
      <MedalImage src={imgSrc} />
      <NameWrapper>
        <NickName>베이비컬렉션</NickName>
        <RankNumber>순위 1위</RankNumber>
        <Point>누적포인트 9,110PT</Point>
      </NameWrapper>
      <PercentWrapper>
        <WinBox>
          <p style={{ fontWeight: 'bold' }}>승률</p>
          <ProgressCircle>60%</ProgressCircle>
        </WinBox>
        <RetireBox>
          <p style={{ fontWeight: 'bold' }}>리타이어율</p>
          <ProgressCircle>60%</ProgressCircle>
        </RetireBox>
      </PercentWrapper>
    </RankerWrapper>
  );
};
const RankerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 21px;
  max-width: 300px;
  -webkit-box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
`;
const NameWrapper = styled.div`
  padding-top: 37px;
  padding-bottom: 20px;
  padding-left: 40px;
  border-radius: 10px;
  background-image: url('https://tmi.nexon.com/img/background_flag_rank.png');
  background-size: cover;
  background-position: 50%;
`;

const NickName = styled.div`
  margin-bottom: 13px;
  color: #0077ff;
  font-weight: bold;
`;
const RankNumber = styled.div`
  font-size: 14px;
`;
const Point = styled.div``;

const PercentWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 1px solid #07f;
`;
const WinBox = styled.div`
  position: relative;
  padding-top: 15px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  &:after {
    position: absolute;
    content: ' ';
    display: block;
    top: 20px;
    right: 0;
    width: 1px;
    height: 75px;
    background-color: #f2f2f2;
    border: none;
    opacity: 1;
  }
`;
const RetireBox = styled.div`
  position: relative;
  padding-top: 15px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
`;
const ProgressCircle = styled.div`
  margin: 20px auto;
  width: 57px;
  height: 57px;
  background-color: #ebebeb;
  border-radius: 50%;
`;
const MedalImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  position: absolute;
  top: -12px;
  left: 10px;
`;
export default RankerInfo;
