import React, { useState } from 'react';
import styled from 'styled-components';
import RankerInfo from './RankerInfo';
import RankingInfo from './RankingInfo';
import Buttons from './Buttons';
import Modal from './Modal';
import './box.css';
const RankerBox = () => {
  const [modalState, setModalState] = useState(false);
  const setOnclick = () => setModalState(true);
  return (
    <>
      {modalState && <Modal setModalState={setModalState} />}
      <BaseWrapper>
        <div className="ocean">
          <div className="wave"></div>
        </div>
        <div className="ocean">
          <div className="wave"></div>
        </div>
        <div style={{ width: '1200px', margin: '0 auto' }}>
          <RankingInfo setOnclick={setOnclick} />
          <Buttons />
        </div>
        <Rankers>
          <RankerInfo imgSrc="https://tmi.nexon.com/img/assets/icon_goldmedal.png" />
          <RankerInfo imgSrc="https://tmi.nexon.com/img/assets/icon_silvermedal.png" />
          <RankerInfo imgSrc="https://tmi.nexon.com/img/assets/icon_bronzemedal.png" />
        </Rankers>
      </BaseWrapper>
    </>
  );
};

const BaseWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 100%;
  min-width: 800px;
  margin: 0 auto;
  background-color: #005fcc;
  justify-content: center;
  flex-direction: column;
`;
const Rankers = styled.div`
  display: flex;
  justify-content: center;
`;
export default RankerBox;
