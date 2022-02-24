import React, { useState } from 'react';
import styled from 'styled-components';

function Summary() {
  const [clickedTab, setClickedTab] = useState('트랙');
  const changeColor = (e) => {
    let tabName = e.target.innerText;
    setClickedTab(tabName);
  };

  return (
    <WholeTrackCart>
      <TrackCartNav>
        <li>
          <div
            className={clickedTab === '트랙' ? 'active' : ''}
            onClick={changeColor}
          >
            트랙
          </div>
        </li>
        <li>
          <div
            className={clickedTab === '카트' ? 'active' : ''}
            onClick={changeColor}
          >
            카트
          </div>
        </li>
      </TrackCartNav>
      <RecordBox>
        <h5>
          <span>트랙</span>전적
        </h5>
        <p>
          평균 상위
          <span>37.14</span>
          &nbsp;%
        </p>
        <GraphBox></GraphBox>
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
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
              <tr>
                <th>ㅇ</th>
                <th>ㅇㅇㅇㅇㅇㅇㅇㅇ</th>
                <th>1</th>
                <th>01</th>
                <th>15971</th>
                <th>50</th>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </RecordBox>
    </WholeTrackCart>
  );
}

const WholeTrackCart = styled.div`
  width: 330px;
  height: 691px;
`;

const RecordBox = styled.div`
  position: relative;
  width: 330px;
  height: 542px;
  border: 1px solid #f2f2f2;
  margin-bottom: 10px;
  background-color: #fff;

  & h5 {
    position: relative;
    padding: 0 8px;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
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
  }
  & p {
    position: absolute;
    top: 15px;
    right: 28px;
    font-size: 12px;
    font-weight: 500;
    & span {
      margin-left: 5px;
      color: #07f;
    }
  }
`;

const TrackCartNav = styled.ul`
  width: 330px;
  margin: 0;
  padding: 0;
  height: 40px;
  list-style: none;
  display: flex;
  cursor: pointer;
  & li {
    list-style: none;
    width: 116px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    & div {
      height: 40px;
      background-color: #ebebeb;
      box-sizing: border-box;
    }
    div.active {
      background-color: #ffffff;
      border-bottom: 3px solid dodgerblue;
    }
  }
`;

const GraphBox = styled.div`
  width: 278px;
  height: 209.5px;
  margin: 0 auto;
  border: 1px solid silver;
`;

const TableContainer = styled.div`
  width: 328px;
  height: 236px;
  overflow: scroll;
  & table {
    width: 312px;
    & thead {
      width: 312px;
      line-height: 35px;
      font-size: 13px;
      background-color: #fbfbfb;
      & tr {
        display: table-row;
        & th {
        }
      }
    }
  }
`;

export default Summary;
