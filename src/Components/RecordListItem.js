import React from 'react';
import styled from 'styled-components';

/* 
ListItem 클래스 이름:
- winner: 1등 (파란색)
- retire: 리타이어 (빨간색)
*/

const RecordListItem = (props) => {
  const dummyData = {
    date: '1일 전',
    rank: '2',
    totalPlayers: '8',
    track: '빌리지 운명의 다리',
    kart: '흰 소X',
    time: "2'06'70",
    dropdownData: [
      {
        id: 1,
        kartImage: 'image1.jpg',
        user: '뽄뚜',
        userRecord: '2-14-11',
      },
    ],
  };

  return (
    <ListItem className="retire">
      <p className="date">{dummyData.date}</p>
      <p className="rank">
        <span className="rank-data">#{dummyData.rank}</span>
        <span>/{dummyData.totalPlayers}</span>
      </p>
      <p className="track">{dummyData.track}</p>
      <p className="kart">{dummyData.kart}</p>
      <p className="time">{dummyData.time}</p>
      <p className="open-dropdown">
        <span></span>
      </p>
    </ListItem>
  );
};

const ListItem = styled.li`
  width: 100%;
  height: 88px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-left: 4px solid #a1a1a1;
  margin-bottom: 5px;
  display: flex;
  // align-items: center;
  text-align: center;

  & > p {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .date {
    width: 65px;
    font-size: 12px;
    font-weight: 400;
  }
  .rank {
    width: 140px;
    padding-left: 10px;
    color: #1f334a;
    opacity: 0.5;
    text-align: start;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
  }
  .rank-data {
    margin-right: 5px;
    font-size: 30px;
  }
  .track {
    width: 150px;
  }
  .kart {
    width: 150px;
  }
  .time {
    width: 100px;
    font-weight: 500;
  }
  .open-dropdown {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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

export default RecordListItem;
