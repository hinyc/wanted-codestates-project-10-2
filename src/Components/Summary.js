import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KartSummary } from './KartSummary';
import { TrackSummary } from './TrackSummary';
// import axios from 'axios';
// import { headers } from '../Util/util';

function Summary({ matchInfo }) {
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
      {clickedTab === '트랙' ? (
        <TrackSummary matchInfo={matchInfo} />
      ) : (
        <KartSummary matchInfo={matchInfo} />
      )}
    </WholeTrack>
  );
}

const WholeTrack = styled.div`
  width: 330px;
  height: 691px;
`;

const TrackKartNav = styled.ul`
  width: 330px;
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
      border-bottom: 3px solid #07f;
    }
  }
`;

export default Summary;
