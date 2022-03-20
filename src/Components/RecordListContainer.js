import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecordListItem from './RecordListItem';
import { headers, PROXY } from '../Util/util';
import axios from 'axios';

const MATCH_LENGTH = 20;

const RecordListContainer = ({ nickname, matchInfo }) => {
  const [playerName, setPlayerName] = useState(nickname);
  const [recentMatchList, setRecentMatchList] = useState([]); // 최근 매치 데이터 일부를 담는 배열
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setPlayerName(nickname);
  }, [nickname]);

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
  useEffect(() => {
    filterRecentMatches();
  }, []);

  // 최근 일주일 간 매치 데이터만 필터링해서 저장
  const filterRecentMatches = () => {
    const currentDatetime = getCurrentDatetime();
  };
  useEffect(() => {
    async function fetchData() {
      const matchData = await fetchUserAccessId().then((data) => data);
      setRecentMatchList(matchData.map((match) => match.players)); // recentMatchPlayers
      setMatches(matchData);
    }
    fetchData();
  }, []);

  const fetchUserAccessId = async () => {
    // 라이더명으로 유저 정보 조회
    const playerList = await axios
      .get(
        `${PROXY}/kart/v1.0/users/nickname/${encodeURI(playerName)}`,
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

  console.log(recentMatchList);
  return (
    <ListWrapper>
      <section style={{ height: 'auto' }}>
        {/* {recentMatchList.map((players, idx) => {
          const searchedPlayer = players.filter(
            (player) => player.characterName === playerName,
          );

          return (
            <div key={idx}>
              <RecordListItem
                matchInfo={matches[idx]}
                player={searchedPlayer[0]}
                players={players}
              />
            </div>
          );
        })} */}
      </section>
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  width: 660px;
  // height: 3000px;
`;

export default RecordListContainer;
