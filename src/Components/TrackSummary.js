import React from 'react';
import styled from 'styled-components';
import TrackRankChart from '../Components/Dashboard/TrackRankChart';

export const TrackSummary = () => {
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
        신화 신들의 세계
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
              <th>상위</th>
            </tr>
          </thead>
          <tbody>
            <Trtrtr />
          </tbody>
        </table>
      </TableContainer>
    </RecordBox>
  );
};

function Trtrtr({}) {
  return (
    <tr>
      <td>
        <input type="radio"></input>
      </td>
      <td>dfdfdfddf</td>
      <td>dfdf</td>
      <td>df</td>
      <td>df</td>
      <td>dfd</td>
    </tr>
  );
}

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
  & table {
    width: 312px;
    & thead {
      width: 312px;
      line-height: 35px;
      font-size: 13px;
      background-color: #fbfbfb;
      & tr {
        display: table-row;
        background-color: #fbfbfb;
        line-height: 35px;
        & th {
          background-color: #fbfbfb;
        }
      }
    }
    & tbody {
      & tr {
        line-height: 35px;
        display: table-row;
        & td {
          line-height: 45px;
          font-size: 13px;
        }
      }
    }
  }
`;
