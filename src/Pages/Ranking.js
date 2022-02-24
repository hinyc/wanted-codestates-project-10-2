import React, { useEffect, useState } from 'react';
import RankList from '../Component/RankList';
import { API_KEY } from '../Util/util';

export default function Ranking() {
  const nickname = '베이비컬렉션';

  // useEffect(() => {
  //   // matchType 개인전 e60946660f964b7aadf47691a6c663cc57b2cf8021761c9183aa1fabea1f8537
  //   // matchType 팀전 effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e
  //   fetch(
  //     // 현재 날짜의 매치리스트 조회
  //     `/kart/v1.0/matches/all?&limit=200&match_types=e60946660f964b7aadf47691a6c663cc57b2cf8021761c9183aa1fabea1f8537`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization: API_KEY,
  //         ContentType: 'application/json',
  //       },
  //     },
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const matchList = data.matches[0].matches;
  //       // 매치 상세내역 1개 조회
  //       fetch(`/kart/v1.0/matches/${matchList[0]}`, {
  //         method: 'GET',
  //         headers: {
  //           Authorization: API_KEY,
  //           ContentType: 'application/json',
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //         });
  //     });
  // }, []);

  return (
    <div>
      <RankList />
    </div>
  );
}
