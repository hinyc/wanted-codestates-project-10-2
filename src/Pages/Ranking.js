import React from 'react';
import RankList from '../Components/RankList';
import RankerBox from '../Components/Rank/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { headers, PROXY,  userList } from '../Util/util';

export default function Ranking({ setSeletPage }) {
  // 개인전 matchType : 7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a (스피드개인전)
  // 팀전 matchType : effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e (스피드 팀전)
  useEffect(() => {
    setSeletPage('ranking');
  }, [setSeletPage]);
  // 모든 유저 정보를 얻는게 불가능해서 임의로 아래 유저들에 대해서만 랭킹 산정함

  const date = new Date();
  const startDate = new Date(
    +new Date(date.setHours(0, 0, 0, 0)) + 3240 * 10000,
  )
    .toISOString()
    .replace('T', '')
    .replace(/\..*/, '');
  const endDate = new Date(
    +new Date(date.setHours(23, 59, 59, 999)) + 3240 * 10000,
  )
    .toISOString()
    .replace('T', ' ')
    .replace(/\..*/, '');
  const [matchType, setMatchType] = useState(
    '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a', // 개인전
  );
  const [resDataList, setResDataList] = useState([]);
  const [matchDataList, setMatchDataList] = useState([]);
  const [top3MatchList, setTop3MatchList] = useState([]);
  const [MatchList, setMatchList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 각 유저의 오늘 하루 모든 개인전 매치 조회
    axios
      .all(
        userList.map((user) =>
          axios.get(
            `${PROXY}/kart/v1.0/users/${user}/matches?start_date=${startDate}&end_date=${endDate}&limit=200&match_types=${matchType}`,
            headers,
          ),
        ),
      )
      .then((allRes) => {
        setResDataList(allRes.map((res) => res.data));
      });
  }, [endDate, startDate, matchType]);

  useEffect(() => {
    const arr = [];
    for (let data of resDataList) {
      if (data.matches.length > 0) {
        const matchCount = data.matches[0].matches.length;
        const avgRank =
          data.matches[0].matches.reduce((acc, cur) => {
            return acc + Number(cur.player.matchRank);
          }, 0) / matchCount;
        const winP =
          data.matches[0].matches.reduce((acc, cur) => {
            return acc + Number(cur.player.matchWin);
          }, 0) / matchCount;
        const retireP =
          data.matches[0].matches.reduce((acc, cur) => {
            return acc + Number(cur.player.matchRetired);
          }, 0) / matchCount;
        // console.log(matchCount, avgRank, winP, retireP);
        arr.push({
          id: data.nickName,
          matchCount: matchCount,
          avgRank: avgRank,
          winP: winP,
          retireP: retireP,
        });
      }
      setMatchDataList(arr);
    }
  }, [resDataList]);

  useEffect(() => {
    // 평균랭크 순 정렬하기
    const filtered = matchDataList
      .filter((data) => data.winP !== 0 && data.retireP !== 0)
      .sort((data1, data2) => {
        return data1.avgRank - data2.avgRank;
      });
    const top3 = [];
    top3.push({
      ...filtered[0],
      ...{
        number: 1,
        imgSrc: 'https://tmi.nexon.com/img/assets/icon_goldmedal.png',
      },
    });
    top3.push({
      ...filtered[1],
      ...{
        number: 2,
        imgSrc: 'https://tmi.nexon.com/img/assets/icon_silvermedal.png',
      },
    });
    top3.push({
      ...filtered[2],
      ...{
        number: 3,
        imgSrc: 'https://tmi.nexon.com/img/assets/icon_bronzemedal.png',
      },
    });
    setTop3MatchList(top3);
    setMatchList(filtered.slice(3));
    setLoading(true);
  }, [matchDataList]);

  return loading ? (
    <div>
      <RankerBox
        top3MatchList={top3MatchList}
        matchType={matchType}
        setMatchType={setMatchType}
      />

      <RankList matchList={MatchList} />
    </div>
  ) : (
    <div>로딩중</div>
  );
}
