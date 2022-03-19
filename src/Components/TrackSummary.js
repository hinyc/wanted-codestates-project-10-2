import React, { useState } from 'react';
import styled from 'styled-components';
import TrackRankChart from '../Components/Dashboard/TrackRankChart';
import { SummaryTR } from './SummaryTR';
import { trackListObj, matchTimeTimeExtractor } from '../Util/util';
import { useSelector } from 'react-redux';

export const TrackSummary = () => {
  const matchInfo = useSelector((state) => state.userInfo.matches);

  const makeTrackTotalList = (matches) => {
    const trackTotalList = {};
    matches.forEach((el) => {
      let exist = false;
      if (Object.keys(trackTotalList).length > 0) {
        if (trackTotalList[el.trackId]) {
          exist = true;
        }
      }
      if (el.player.matchWin === '') {
        return;
      }
      if (exist) {
        trackTotalList[el.trackId] = {
          count: trackTotalList[el.trackId].count + 1,
          retired:
            trackTotalList[el.trackId].retired + Number(el.player.matchRetired),
          win:
            Number(trackTotalList[el.trackId].win) + Number(el.player.matchWin),
          trackRecord: [
            ...trackTotalList[el.trackId].trackRecord,
            [el.trackId, Number(el.player.matchTime)],
          ],
        };
      } else {
        trackTotalList[el.trackId] = {
          count: 1,
          retired: Number(el.player.matchRetired),
          win: Number(el.player.matchWin),
          trackRecord: [[el.trackId, Number(el.player.matchTime)]],
        };
      }
    });
    return Object.entries(trackTotalList).sort(
      (a, b) => b[1].count - a[1].count,
    );
  };

  const divTrackList = makeTrackTotalList(matchInfo[0].matches);
  let trackRecords = divTrackList.map((record) => {
    return record[1].trackRecord;
  });
  trackRecords.forEach((record, i) => {
    record.sort((a, b) => a[1] - b[1]);
  });
  trackRecords = trackRecords.map((item) => item.filter((i) => i[1] !== 0));
  const [selectTrack, setSelectTrack] = useState(0);

  const selectTrackHandler = (e) => {
    setSelectTrack(e.target.value);
  };

  console.log(divTrackList);
  return (
    <RecordBox>
      <TrackOrKartRecord>
        <span>트랙</span>전적
      </TrackOrKartRecord>
      <AvarageHigh>
        평균 상위
        <span>37.14</span>
        &nbsp;%
      </AvarageHigh>
      <MapName>
        {trackListObj[divTrackList[selectTrack][0]]}
        <span>&nbsp;&nbsp;기록분포</span>
      </MapName>
      <GraphBox>
        <GraphContainer>
          <TrackRankChart />
        </GraphContainer>
      </GraphBox>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>선택</th>
              <th>트랙</th>
              <th>횟수</th>
              <th>승률</th>
              <th>기록</th>
              {/* <th>상위</th> */}
            </tr>
          </thead>
          <tbody>
            {divTrackList.map((el, idx) => (
              <tr key={idx} className="body">
                <td className="select">
                  <input
                    onClick={selectTrackHandler}
                    type="radio"
                    name="track"
                    value={idx}
                  />
                </td>
                <td className="track">
                  <img
                    src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/unknown_1.png`}
                    alt=""
                  />
                  <span>{trackListObj[el[0]]}</span>
                </td>
                <td className="count">{el[1].count}</td>
                <td className="winRate">{`${Math.round(
                  (el[1].win / el[1].count) * 100,
                )}%`}</td>
                <td className="record">
                  {trackRecords[idx][0]
                    ? matchTimeTimeExtractor(trackRecords[idx][0][1])
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </RecordBox>
  );
};

const RecordBox = styled.div`
  position: relative;
  width: 330px;
  height: 542px;
  border: 1px solid #f2f2f2;
  margin-bottom: 10px;
  background-color: #fff;
`;

const TrackOrKartRecord = styled.h5`
  position: relative;
  padding: 0 8px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 0px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #1f334a;
  vertical-align: middle;
  & span {
    color: #07f;
    margin-right: 5px;
    font-size: 14px;
  }
`;

const AvarageHigh = styled.p`
  position: absolute;
  top: 27px;
  right: 28px;
  font-size: 12px;
  font-weight: 500;
  & span {
    margin-left: 5px;
    color: #07f;
  }
`;

const MapName = styled.p`
  margin: 0 20px;
  padding-top: 12px;
  font-size: 14px;
  border-top: 1px solid #ccc;
  & span {
    color: #a1a1a1;
  }
`;

const GraphBox = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div`
  width: 328px;
  height: 236px;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 13px;
  text-align: center;
  & table {
    width: 312px;
    & thead {
      width: 312px;
      line-height: 45px;
      font-size: 13px;
      background-color: #fbfbfb;
      & tr {
        display: table-row;
        background-color: #fbfbfb;
        line-height: 45px;
        & th {
          background-color: #fbfbfb;
        }
      }
    }
  }
  & tbody {
    & tr {
      height: 45px;
      & td {
        font-size: 13px;
        vertical-align: middle;
      }
    }
    .track {
      height: 45px;
      display: flex;
      align-items: center;
      img {
        width: 27px;
        height: 27px;
      }
      span {
        margin-left: 10px;
      }
    }
    .select {
      vertical-align: middle;
      input {
        width: 20px;
      }
    }
    .count {
      width: 30px;
    }
  }
`;
