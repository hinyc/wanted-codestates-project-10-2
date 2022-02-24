import React from 'react';
import styled from 'styled-components';
import Ranker from './RankerItem';

const LankingBox = () => {
  return (
    <BaseWrapper>
      <Ranker imgSrc="https://tmi.nexon.com/img/assets/icon_goldmedal.png" />
      <Ranker imgSrc="https://tmi.nexon.com/img/assets/icon_silvermedal.png" />
      <Ranker imgSrc="	https://tmi.nexon.com/img/assets/icon_bronzemedal.png" />
    </BaseWrapper>
  );
};

export default LankingBox;

const BaseWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 80%;
  max-width: 1000px;
  min-width: 800px;
  margin: 0 auto;
  background-color: #eee;
`;
