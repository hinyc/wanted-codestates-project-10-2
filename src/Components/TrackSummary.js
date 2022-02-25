import React from 'react';
import styled from 'styled-components';

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
      <GraphBox>
        <MapName>
          신화 신들의 세계
          <span>&nbsp;&nbsp;기록분포</span>
        </MapName>
        <Graph></Graph>
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
            <tr>
              <td>ㅇ</td>
              <td>
                <a href="##">
                  <img href="" alt="" />
                  &nbsp;빌리지 고가의 질주
                </a>
              </td>
              <td>1</td>
              <td>01</td>
              <td>15971</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </RecordBox>
  );
};

const RecordBox = styled.div`
  position: relative;
  width: 430px;
  height: 542px;
  border: 1px solid #f2f2f2;
  margin-bottom: 10px;
  background-color: #fff;
  @media screen and (max-width: 1630px) {
    max-width: 330px;
  }
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

const GraphBox = styled.div`
  border-top: 1px solid #ccc;
  margin: 0 25px 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 259px;
`;

const MapName = styled.p`
  margin: 0;
  font-size: 14px;
  & span {
    color: #a1a1a1;
  }
`;

const Graph = styled.div`
  width: 378px;
  height: 188px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid silver;
  @media screen and (max-width: 1630px) {
    max-width: 278px;
  }
`;

const TableContainer = styled.div`
  width: 428px;
  height: 236px;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 13px;
  & table {
    width: 412px;
    & thead {
      width: 412px;
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
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 1630px) {
    max-width: 312px;
    & table {
      width: 312px;
      & thead {
        width: 312px;
        line-height: 35px;
        font-size: 13px;
      }
    }
  }
`;
