import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecordListItem from './RecordListItem';
import RecordListDropdown from './RecordListDropdown';
import { headers } from '../Util/util';
import axios from 'axios';

const RecordListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerName, setPlayerName] = useState('BBEESSTT');
  const [recent10MatchList, setRecent10MatchList] = useState([]);
  const [matches, setMatches] = useState([]);

  const handleDropdownDisplay = () => {
    setIsOpen((prev) => !prev);
  };

  const fetchUserAccessId = async () => {
    // 라이더명으로 유저 정보 조회
    const playerList = await axios
      .get(`/kart/v1.0/users/nickname/${encodeURI(playerName)}`, headers)
      .then((response) => response.data)
      .then((data) => {
        // 유저 정보 조회 결과가 담긴 data
        // console.log(data);
        const { accessId } = data;
        // 유저 고유 식별자(accessId)를 이용해서 최근에 플레이한 매치 10개 조회
        return axios
          .get(`/kart/v1.0/users/${accessId}/matches?&limit=10`, headers)
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
                  axios.get(`/kart/v1.0/matches/${matchId}`, headers),
                ),
              )
              .then((allRes) => allRes.map((res) => res.data))
              .then((data) => {
                // data 변수: 매치 10개에 대한 상세 정보가 담긴 리스트
                console.log(data);

                /* 이 부분!!!!!!!
                // 각 매치에서 플레이어 정보 리스트만 빼기
                const playerList = data.map((match) => match.players);

                // console.log(playerList);
                return playerList;
                */
                return data;
              });
          });
      })
      .catch((err) => console.error(err)); // 에러 처리

    // console.log(playerList);
    return playerList;
  };

  useEffect(() => {
    async function fetchData() {
      const matchData = await fetchUserAccessId().then((data) => data);
      setRecent10MatchList(matchData.map((match) => match.players)); // recent10MatchPlayers
      setMatches(matchData);
    }
    fetchData();
  }, []);

  // 플레이어 완주 순위대로 정렬
  const sortByRank = (a, b) => {
    return a.matchRank - b.matchRank;
  };

  return (
    <section>
      <ListWrapper>
        {recent10MatchList.map((players, idx) => {
          const orderedPlayers = players.sort(sortByRank);
          const searchedPlayer = players.filter(
            (player) => player.characterName === playerName,
          );

          return (
            <div key={idx}>
              <RecordListItem
                handleDropdownDisplay={handleDropdownDisplay}
                matchInfo={matches[idx]}
                player={searchedPlayer}
              />
              {true && <RecordListDropdown players={orderedPlayers} />}
            </div>
          );
        })}
      </ListWrapper>
    </section>
  );
};

const ListWrapper = styled.ul`
  width: 660px;
  height: auto;
`;

export default RecordListContainer;
