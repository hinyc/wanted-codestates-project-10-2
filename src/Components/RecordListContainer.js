import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecordListItem from './RecordListItem';
import RecordListDropdown from './RecordListDropdown';
import { headers, PROXY } from '../Util/util';
import axios from 'axios';

const RecordListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playerName, setPlayerName] = useState('BBEESSTT');
  const [recent10MatchList, setRecent10MatchList] = useState([]);

  const handleDropdownDisplay = () => {
    setIsOpen((prev) => !prev);
  };

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
        const { accessId, name, level } = data;
        // 유저 고유 식별자(accessId)를 이용해서 최근에 플레이한 매치 10개 조회
        return axios
          .get(
            `${PROXY}/kart/v1.0/users/${accessId}/matches?&limit=10`,
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
                // data 변수: 매치 10개에 대한 상세 정보가 담긴 리스트
                // console.log(data);

                // 각 매치에서 플레이어 정보 리스트만 빼기
                const playerList = data.map((match) => match.players);
                // console.log(playerList);
                return playerList;
              });
          });
      })
      .catch((err) => console.error(err)); // 에러 처리

    // console.log(playerList);
    return playerList;
  };

  const clickHandler = async () => {
    // 사용자의 최근 10개 매치에 대한 플레이어 정보가 담긴 리스트 가져오기
    const recentMatchList = await fetchUserAccessId().then((data) => data);
    setRecent10MatchList(recentMatchList);
  };
  // useEffect(() => {
  //   console.log(recent10MatchList);
  // }, [recent10MatchList]);

  // 홈페이지 렌더링될 때 자동으로 api 호출해서 데이터 가져오기 (를 하고 싶었으나 안됨... 왜 안될까)
  // useEffect(() => {
  //   (async () =>
  //     setRecent10MatchList(await fetchUserAccessId().then((data) => data)))();
  // });

  return (
    <section>
      <h1>기록 전적 목록</h1>
      <button onClick={clickHandler}>fetch</button>
      <ListWrapper>
        <RecordListItem handleDropdownDisplay={handleDropdownDisplay} />
        {isOpen && <RecordListDropdown recent10MatchList={recent10MatchList} />}
        <RecordListItem />
        <RecordListItem />
        <RecordListItem />
      </ListWrapper>
    </section>
  );
};

const ListWrapper = styled.ul`
  width: 660px;
  height: auto;
`;

export default RecordListContainer;
