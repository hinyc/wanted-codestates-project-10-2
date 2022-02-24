import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../Util/util';
import RankCard from './RankCard';

const RankList = () => {
  const date = new Date();
  const [userList, setUserList] = useState([
    '50513512',
    // '2097689234',
    '134525754',
    '1242159681',
    // '117614495',
  ]);
  const [resList, setResList] = useState([]);
  const [userMatchList, setUserMatchList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 각 유저의 오늘하루 모든 개인전 매치 조회
    axios
      .all(
        userList.map((user) =>
          axios.get(
            `/kart/v1.0/users/${user}/matches?start_date=${date}&end_date=${date}&limit=200&match_types=e60946660f964b7aadf47691a6c663cc57b2cf8021761c9183aa1fabea1f8537`,
            {
              headers: {
                Authorization: API_KEY,
                ContentType: 'application/json',
              },
            },
          ),
        ),
      )
      .then((allRes) => {
        setResList(allRes.map((res) => res.data));
      });
  }, []);

  useEffect(() => {
    // 정렬하기
    const sorted = resList.sort((data1, data2) => {
      const matchCount1 = data1.matches[0].matches.length;
      const avgRank1 =
        data1.matches[0].matches.reduce((acc, cur) => {
          return acc + Number(cur.player.matchRank);
        }, 0) / matchCount1;
      const matchCount2 = data2.matches[0].matches.length;
      const avgRank2 =
        data2.matches[0].matches.reduce((acc, cur) => {
          return acc + Number(cur.player.matchRank);
        }, 0) / matchCount2;
      return avgRank1 - avgRank2;
    });
    console.log(sorted);
    setUserMatchList(sorted);
    setLoading(true);
  }, [resList]);

  return loading ? (
    <div>
      {userMatchList.map((match, id) => (
        <>
          <RankCard match={match} id={id} />
        </>
      ))}
    </div>
  ) : (
    <div>로딩중</div>
  );
};

export default RankList;
