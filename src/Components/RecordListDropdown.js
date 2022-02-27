import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const initialData = {
  characterName: '',
  matchRank: '리타이어',
  kart: '', // player.kart로 카트 이름 조회
  matchRetired: true,
  matchTime: '-',
};

const RecordListDropdown = ({ recent10MatchList, players }) => {
  // const [playerListData, setPlayerListData] = useState(recent10MatchList);
  const [playersData, setPlayersData] = useState(players);

  // useEffect(() => {
  //   const totalPlayers = players.length;
  //   const fillEmptyPlayers = [];
  //   for (let i = 0; i < 8 - totalPlayers; i++) {
  //     fillEmptyPlayers.push(initialData);
  //   }
  //   setPlayersData((prev) => {
  //     console.log(prev);
  //     console.log(fillEmptyPlayers);
  //     return prev;
  //   });
  // }, []);

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
          const kartURI = `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kart}.png?v=1645788019`;

          return (
            <li key={player.accountNo + idx} className="content">
              <div>
                <div className="rank">{matchRank}</div>
                <div className="kart">
                  <img src={kartURI} alt={`${characterName}의 카트`}></img>
                </div>
                <div className="nickname">{characterName}</div>
                <div className="record">{matchTime}</div>
              </div>
            </li>
          );
        })}
        {}
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
`;

export default RecordListDropdown;
