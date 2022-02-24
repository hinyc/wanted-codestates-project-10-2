import React, { useState } from 'react';
import styled from 'styled-components';
import { KartSummary } from './KartSummary';
import { TrackSummary } from './TrackSummary';

function Summary() {
  const [clickedTab, setClickedTab] = useState('트랙');
  const changeColor = (e) => {
    let tabName = e.target.innerText;
    setClickedTab(tabName);
  };

  return (
    <WholeTrack>
      <TrackKartNav>
        <li>
          <div
            className={clickedTab === '트랙' ? 'active' : ''}
            onClick={changeColor}
          >
            트랙
          </div>
        </li>
        <li>
          <div
            className={clickedTab === '카트' ? 'active' : ''}
            onClick={changeColor}
          >
            카트
          </div>
        </li>
      </TrackKartNav>
      {clickedTab === '트랙' ? <TrackSummary /> : <KartSummary />}
    </WholeTrack>
  );
}

const WholeTrack = styled.div`
  min-width: 430px;
  height: 691px;
  @media screen and (max-width: 1630px) {
    max-width: 330px;
  }
`;

const TrackKartNav = styled.ul`
  width: 430px;
  margin: 0;
  padding: 0;
  height: 40px;
  list-style: none;
  display: flex;
  cursor: pointer;
  & li {
    list-style: none;
    width: 116px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    & div {
      height: 40px;
      background-color: #ebebeb;
      box-sizing: border-box;
    }
    div.active {
      background-color: #ffffff;
      border-bottom: 3px solid dodgerblue;
    }
    @media screen and (max-width: 1630px) {
      max-width: 330px;
    }
  }
`;

export default Summary;
