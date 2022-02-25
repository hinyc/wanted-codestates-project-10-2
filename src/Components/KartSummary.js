import React from 'react';
import styled from 'styled-components';

export const KartSummary = () => {
  return (
    <>
      <KartRecordBox>
        <TrackOrKartRecord>
          <span>카트</span>전적
        </TrackOrKartRecord>
        <KartBox>
          <KartName>
            <KartGrade>일반</KartGrade>
            골든 파라곤 9
          </KartName>
          <KartAndMap>
            <KartImg></KartImg>
            <KartImgNextMap>
              <ul>
                <MapList>
                  <div>
                    <h3>코리아 제주 해오름</h3>
                  </div>
                  <span>1'03'07</span>
                </MapList>
                <MapList></MapList>
                <MapList></MapList>
                <MapList></MapList>
              </ul>
            </KartImgNextMap>
          </KartAndMap>
        </KartBox>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>선택</th>
                <th>카트</th>
                <th>횟수</th>
                <th>승률</th>
                <th>리타율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ㅇ</td>
                <td>ㅇㅇㅇㅇㅇㅇㅇㅇ</td>
                <td>1</td>
                <td>01</td>
                <td>15971</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </KartRecordBox>
    </>
  );
};
const KartRecordBox = styled.div`
  position: relative;
  width: 430px;
  height: 501px;
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

const KartBox = styled.div`
  border-top: 1px solid #ccc;
  margin: 0 25px 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const KartGrade = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 40px;
  height: 20px px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #1f334a;
  border-radius: 15px;
  color: #1f334a;
`;

const KartName = styled.p`
  margin: 0;
  font-size: 14px;
  color: #1f334a;
`;

const KartAndMap = styled.div`
  width: 378px;
  height: 155px;
  padding: 10px 0px;
  display: flex;
  @media screen and (max-width: 1630px) {
    max-width: 278px;
  }
`;

const KartImg = styled.div`
  width: 112px;
  height: 135px;
  border: 1px solid black;
`;

const KartImgNextMap = styled.div`
  display: flex;
  flex-direction: column;
  width: 162.5px;
  height: 135px;
  border: 1px solid black;
  & ul {
    flex: 1;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const MapList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 10px);
  height: 33px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  font-size: 12px;
  div {
  }
  h3 {
    font-weight: 400;
  }
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
