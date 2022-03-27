import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecordListDropdown from './RecordListDropdown';
import { kartListObj, trackListObj } from '../Util/util';
import { matchTimeTimeExtractor } from '../Util/util';

/* 
PlayerRecord에 클래스 추가해서 1등, 리타이어 스타일 적용:
- winner: 1등 (파란색)
- retire: 리타이어 (빨간색)
*/

const RecordListItem = ({ matchInfo, player, players }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dummyData = {
    date: '1일 전', // 현재 시간 기준으로 계산한 값
    // rank: player[0].matchRank,
    totalPlayers: '8', // matchInfo.players.length
    track: '빌리지 운명의 다리', // trackId로 맵 이름 조회
    kart: '흰 소X', // player.kart로 카트 이름 조회
    time: '-', // 계산한 값 넣기
    dropdownData: [
      {
        id: 1,
        kartImage: 'image1.jpg',
        user: '뽄뚜',
        userRecord: '2-14-11',
      },
    ],
  };

  // matchInfo fetch 하는 시간 걸려서 첫 렌더링시 matchInfo 값이 undefined로 전달되기 때문에
  // matchInfo === undefined 일 경우,
  // 로딩 스피너 띄워주기!!!!!!!!!!!
  useEffect(() => {
    // console.log(matchInfo);
    // console.log(player);
  }, [matchInfo]);

  const handleDropdownDisplay = () => {
    setIsOpen((prev) => !prev);
  };

  const getCurrentDatetime = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date + 'T' + time;
  };

  return (
    <ListItem>
      <PlayerRecord
        className={
          player.matchRetired === '1' || player.matchRank === '0'
            ? 'retire'
            : player.matchRank === '1'
            ? 'winner'
            : ''
        }
      >
        <p className="date">{dummyData.date}</p>
        {player.matchRetired === '1' || player.matchRank === '0' ? (
          <p className="rank" style={{ fontSize: '30px' }}>
            #리타이어
          </p>
        ) : (
          <p className="rank">
            <span className="rank-data">#{player.matchRank}</span>
            <span>/{matchInfo?.players.length || '8'}</span>
          </p>
        )}
        <p className="track">
          {
            trackListObj[
              matchInfo?.trackId ||
                '3b3d58a41efb9b00da3e88874a90b2e97ce0bc43381e7adf73e0358c83b2e1dd'
            ]
          }
        </p>
        <p className="kart">{kartListObj[player.kart]}</p>
        {player.matchRetired === '1' ? (
          <p className="time">-</p>
        ) : (
          <p className="time">
            {player.matchTime !== ''
              ? matchTimeTimeExtractor(player.matchTime)
              : '-'}
          </p>
        )}
        <p className="open-dropdown" onClick={handleDropdownDisplay}>
          <span></span>
        </p>
      </PlayerRecord>
      {isOpen ? (
        <AllPlayersRecord>
          <RecordListDropdown players={players} />
        </AllPlayersRecord>
      ) : (
        ''
      )}
    </ListItem>
  );
};

const ListItem = styled.li`
  width: auto;
`;

const PlayerRecord = styled.div`
  position: relative;
  width: 100%;
  height: 88px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-left: 4px solid #a1a1a1;
  margin-bottom: 5px;
  display: flex;
  text-align: center;

  & > p {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date {
    width: 65px;
    font-size: 12px;
    font-weight: 400;
  }
  .rank {
    justify-content: flex-start;
    width: 140px;
    padding-left: 10px;
    color: #1f334a;
    opacity: 0.5;
    text-align: start;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
  }
  .rank-data {
    margin-right: 5px;
    font-size: 30px;
  }
  .track {
    width: 165px;
  }
  .kart {
    width: 150px;
  }
  // .kart:after {
  //   content: '';
  //   position: absolute;
  //   display: inline-block;
  //   top: 38px;
  //   right: 0;
  //   width: 1px;
  //   height: 16px;
  //   background-color: #ebebeb;
  // }
  .time {
    width: 100px;
    font-weight: 600;
  }
  .open-dropdown {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ebebeb;

    &:hover {
      background: #ebebeb;
    }

    span {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top: 5px solid #a1a1a1;
    }
  }
  .open-dropdown:before {
  }

  /* retire */
  ${(props) =>
    props.className === 'retire'
      ? `
    background: rgba(246, 36, 89, .05);
    border-left: 4px solid #f62459;
    
    .rank {
      color: #f62459;
      opacity: 1;
    }
    .open-dropdown:hover {
      background: rgba(246, 36, 89, .1);
    }
  `
      : ``}

  /* winner */
  ${(props) =>
    props.className === 'winner'
      ? `
    background: rgba(0, 119, 255, .05);
    border-left: 4px solid #07f;
    
    .rank {
      color: #07f;
      opacity: 1;
    }
    .open-dropdown:hover {
      background: rgba(0, 119, 255, .1);
    }
  `
      : ``}
`;

const AllPlayersRecord = styled.div``;

export default RecordListItem;
