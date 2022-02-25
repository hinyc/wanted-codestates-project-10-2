import React from 'react';
import RankList from '../Components/RankList';
import RankerBox from '../Components/Rank/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { headers } from '../Util/util';

export default function Ranking() {
  // 개인전 matchType : 7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a (스피드개인전)
  // 팀전 matchType : effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e (스피드 팀전)
  const [userList, setUserList] = useState([
    '134525754',
    '1091146179',
    '2097689234',
    '117614495',
    '1242159681',
    '1258489521',
    '537117766',
    '1140973743',
    '957139120',
    '638197971',
    '1577319674',
    '1141480757',
    '1611133164',
    '184698949',
    '252318885',
    '117902742',
    '1963422428',
    '1930010498',
  ]);
  const date = new Date();
  // const startDate = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   date.getDate() - date.getDay(),
  // );
  // const endDate = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   date.getDate() + (6 - date.getDay()),
  // );
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
            `/kart/v1.0/users/${user}/matches?start_date=2022-02-20&end_date=2022-02-26&limit=200&match_types=${matchType}`,
            headers,
          ),
        ),
      )
      .then((allRes) => {
        console.log(allRes);
        setResDataList(allRes.map((res) => res.data));
      });
  }, [matchType]);

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
        console.log(matchCount, avgRank, winP, retireP);
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
    console.log(matchDataList);
    // 평균랭크 순 정렬하기
    const filtered = matchDataList.sort((data1, data2) => {
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
