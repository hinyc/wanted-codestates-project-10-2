import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecordListItem from './RecordListItem';
import { headers, PROXY } from '../Util/util';
import axios from 'axios';

const MATCH_LENGTH = 200;

const RecordListContainer = ({ nickname, matchInfo }) => {
  // const [playerName, setPlayerName] = useState(nickname);
  const [recentMatchList, setRecentMatchList] = useState([]); // 최근 매치 데이터 일부를 담는 배열
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 최근 200 경기에 대한 데이터만 조회해서 저장
  useEffect(() => {
    const fetchUserAccessId = async () => {
      setIsLoading(true);

      // 라이더명으로 유저 정보 조회
      const playerList = await axios
        .get(
          `${PROXY}/kart/v1.0/users/nickname/${encodeURI(nickname)}`,
          headers,
        )
        .then((response) => response.data)
        .then((data) => {
          // 유저 정보 조회 결과가 담긴 data
          // console.log(data);
          const { accessId } = data;
          // 유저 고유 식별자(accessId)를 이용해서 최근에 플레이한 매치 MATCH_LENGTH 개 조회
          return axios
            .get(
              `${PROXY}/kart/v1.0/users/${accessId}/matches?&limit=${MATCH_LENGTH}`,
              headers,
            )
            .then((res) => res.data)
            .then((data) => {
              // console.log(data.matches[0].matches);
              // 매치 고유 식별자(matchId)를 배열에 저장
              const matchList = data.matches[0].matches;
              const matchIdList = matchList.map((data_) => data_.matchId);

              // 각 매치 고유 식별자로 해당 매치의 상세 정보 조회
              return axios
                .all(
                  matchIdList.map((matchId) =>
                    axios.get(`${PROXY}/kart/v1.0/matches/${matchId}`, headers),
                  ),
                )
                .then((allRes) => allRes.map((res) => res.data))
                .then((data) => {
                  // data 변수: 매치 MATCH_LENGTH개에 대한 상세 정보가 담긴 리스트
                  return data;
                });
            });
        })
        .catch((err) => console.error(err)); // 에러 처리

      // console.log(playerList);
      return playerList;
    };
    async function fetchData() {
      const matchData = await fetchUserAccessId().then((data) => data);
      setRecentMatchList(matchData.map((match) => match.players)); // recentMatchPlayers
      setMatches(matchData);
      setIsLoading(false);
    }
    fetchData();
  }, [nickname]);

  return (
    <ListWrapper>
      <section style={{ height: 'auto' }}>
        {isLoading ? (
          <LoadingSpinner>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </LoadingSpinner>
        ) : (
          recentMatchList.map((players, idx) => {
            const searchedPlayer = players.filter(
              (player) => player.characterName === nickname,
            );
            if (searchedPlayer[0]) {
              return (
                <div key={idx}>
                  <RecordListItem
                    matchInfo={matches[idx]}
                    player={searchedPlayer[0]}
                    players={players}
                  />
                </div>
              );
            }
          })
        )}
      </section>
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  width: 660px;
  // height: 3000px;
  margin-top: 40px;
  margin-left: 10px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #cef;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #cef transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default RecordListContainer;
