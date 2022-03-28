import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emtpyKartURI from '../Asset/empty_kart.png';
import { matchTimeTimeExtractor } from '../Util/util';

const initialData = {
  characterName: '',
  matchRank: '리타이어',
  kart: '', // player.kart로 카트 이름 조회
  matchRetired: true,
  matchTime: '-',
};

const RecordListDropdown = ({ players, currentPlayer }) => {
  const [playersData, setPlayersData] = useState(
    players.sort((a, b) => a.matchRank - b.matchRank),
  );
  const [emptyPlayers, setEmptyPlayers] = useState([]);

  // 플레이어가 8명 미만일 경우 빈 자리 채우기
  useEffect(() => {
    const fillEmptyPlayers = [];
    for (let i = 0; i < 8 - players.length; i++) {
      fillEmptyPlayers.push(initialData);
    }
    setEmptyPlayers(fillEmptyPlayers);
  }, [players]);

  const imageErrorHandler = (e) => {
    e.target.onerror = null;
    e.target.src = emtpyKartURI;
  };

  return (
    <DropdownContainer>
      <ul>
        <li className="content-header">
          <div>
            <div className="rank">#</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">기록</div>
          </div>
        </li>
        {playersData.map((player, idx) => {
          const { characterName, matchRank, kart, matchRetired, matchTime } =
            player;
          const isCurrentUser = currentPlayer.characterName === characterName;
          const isFirst = matchRank === '1';
          const kartURI = kart
            ? `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kart}.png?v=1645788019`
            : emtpyKartURI;

          return (
            <li
              key={player.accountNo + idx}
              className={isCurrentUser ? 'isCurrentUser' : ''}
            >
              <div>
                {matchRetired === '1' ? (
                  <div className="rank" style={{ color: '#f62459' }}>
                    리타이어
                  </div>
                ) : (
                  <div className={isFirst ? 'rank isFirst' : 'rank'}>
                    {matchRank}
                  </div>
                )}
                <div className="kart">
                  <img
                    src={kartURI}
                    alt={`${characterName}의 카트`}
                    onError={imageErrorHandler}
                  ></img>
                </div>
                <div className="nickname">{characterName}</div>
                <div className="record">
                  {matchRetired === '1' || matchRank === '0'
                    ? '-'
                    : matchTimeTimeExtractor(matchTime)}
                </div>
              </div>
            </li>
          );
        })}
        {emptyPlayers.map((player, idx) => {
          return (
            <li key={'empty_' + idx} className="content">
              <div>
                <div className="rank" style={{ color: '#f62459' }}>
                  리타이어
                </div>
                <div className="kart"></div>
                <div className="nickname"></div>
                <div className="record">-</div>
              </div>
            </li>
          );
        })}
      </ul>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.section`
  width: 100%;
  height: 177px;
  margin-top: -5px;
  margin-bottom: 5px;
  border-width: 1px 1px 1px 1px;
  border-color: #f2f2f2;
  border-style: solid;
  font-size: 12px;

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    width: calc(100% / 9);
  }
  li > div {
    // width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 400;
    background-color: #fff;

    div {
      width: 100%;
    }
  }
  .rank {
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
  }
  .kart {
    height: 78px;
    line-height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 35px;
    }
  }
  .nickname {
    height: 17px;
    line-height: 17px;
  }
  .record {
    height: 42px;
    line-height: 42px;
  }

  // 검색된 유저일 경우

  li.isCurrentUser > div {
    font-weight: 600;
  }
  li.isCurrentUser .rank {
    background-color: #e6e8eb;
  }
  li.isCurrentUser .kart,
  li.isCurrentUser .nickname,
  li.isCurrentUser .record {
    background-color: #f2f3f4;
  }

  // 유저가 1등인 경우
  .isFirst {
    color: #07f;
  }
`;

export default RecordListDropdown;
