/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  kartListObj,
  trackListObj,
  matchTimeTimeExtractor,
} from '../Util/util';

export const KartSummary = ({ matchInfo }) => {
  console.log(matchInfo);
  const makeKartTotalList = (matches) => {
    const kartTotalList = {};

    matches.forEach((el) => {
      let exist = false;

      if (Object.keys(kartTotalList).length > 0) {
        if (kartTotalList[el.player.kart]) {
          exist = true;
        }
      }

      if (exist) {
        kartTotalList[el.player.kart] = {
          count: kartTotalList[el.player.kart].count + 1,
          retired:
            kartTotalList[el.player.kart].retired +
            Number(el.player.matchRetired),
          win: kartTotalList[el.player.kart].win + Number(el.player.matchWin),
          trackRecord: [
            ...kartTotalList[el.player.kart].trackRecord,
            [el.trackId, el.player.matchTime],
          ],
        };
      } else {
        kartTotalList[el.player.kart] = {
          count: 1,
          retired: Number(el.player.matchRetired),
          win: Number(el.player.matchWin),
          trackRecord: [[el.trackId, el.player.matchTime]],
        };
      }
    });
    return Object.entries(kartTotalList).sort(
      (a, b) => b[1].count - a[1].count,
    );
  };
  const kartTotalList = makeKartTotalList(matchInfo[0].matches);
  const [selectKart, setSelectKart] = useState(0); // [{ 'kart', record: { '횟수', '승률', '리타율'}}]
  //카트 횟수 승률 리타율
  // console.log(selectKart);
  const selectKartHandler = (e) => {
    setSelectKart(e.target.value);
  };
  console.log(kartTotalList);
  return (
    <>
      <KartRecordBox>
        <TrackOrKartRecord>
          <span>카트</span>전적
        </TrackOrKartRecord>
        <SelectKartRecord>
          <KartName>
            <KartGrade>일반</KartGrade>
            {kartListObj[kartTotalList[selectKart][0]]}
          </KartName>
          <KartAndMap>
            <KartImg>
              <img
                src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kartTotalList[selectKart][0]}.png?v=1645798750`}
                alt=""
              />
            </KartImg>
            <KartImgNextMap>
              {kartTotalList[selectKart][1].trackRecord.map((el, idx) => {
                if (idx > 3) return;

                return (
                  <MapList key={idx}>
                    <div className="group">
                      <img
                        src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/unknown_1.png`}
                        alt=""
                      />
                      <span className="track">{trackListObj[el[0]]}</span>
                    </div>
                    <span className="record">
                      {matchTimeTimeExtractor(el[1])}
                    </span>
                  </MapList>
                );
              })}
            </KartImgNextMap>
          </KartAndMap>
        </SelectKartRecord>

        <KartScoreTable>
          <div className="head">
            <div className="count">선택</div>
            <div className="kartHead">카트</div>
            <div className="count">횟수</div>
            <div className="win">승률</div>
            <div className="retired">리타율</div>
          </div>

          {kartTotalList.map((el, idx) => (
            <div key={idx} className="body">
              <div className="select">
                <input
                  onClick={selectKartHandler}
                  type="radio"
                  name="kart"
                  value={idx}
                />
              </div>
              <div className="kart">
                <img
                  src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${el[0]}.png?v=1645798750`}
                  alt=""
                />
                <span>{kartListObj[el[0]]}</span>
              </div>
              <div className="count">{el[1].count}</div>
              <div className="win">{`${Math.round(
                (el[1].win / el[1].count) * 100,
              )}%`}</div>
              <div className="retired">{`${Math.round(
                (el[1].retired / el[1].count) * 100,
              )}%`}</div>
            </div>
          ))}
        </KartScoreTable>
      </KartRecordBox>
    </>
  );
};

const KartScoreTable = styled.div`
  border-top: 1px solid #f2f2f2;
  width: 328px;
  height: 236px;
  overflow: scroll;
  /* overflow: hidden; */
  font-size: 13px;
  table {
    width: 100%;
  }

  .head {
    font-weight: 700;
    display: flex;
    align-items: center;
    line-height: 35px;
    font-size: 13px;
    background-color: #fbfbfb;
    text-align: center;
    div {
      position: relative;
      :after {
        content: '';
        position: absolute;
        top: 10px;
        right: 0;
        display: inline-block;
        width: 1px;
        height: 15px;
        background-color: #ccc;
      }
    }
  }
  .body {
    text-align: center;
    display: flex;
    align-items: center;
  }
  .select {
    width: 9.1%;
    line-height: 45px;
  }
  input {
    width: 13px;
    height: 13px;
    margin: 0px 5px;
  }
  .kartHead {
    width: 55.9%;
  }
  .kart {
    display: flex;
    align-items: center;
    width: 55.9%;
    padding-left: 10px;
    img {
      width: 36px;
    }
    span {
      line-height: 45px;
      margin-left: 10px;
    }
  }
  .count {
    width: 9.1%;
  }
  .win {
    width: 12.3%;
  }
  .retired {
    width: 13.6%;
  }
`;

const KartRecordBox = styled.div`
  position: relative;
  width: 330px;
  height: 501px;
  border: 1px solid #f2f2f2;
  margin-bottom: 10px;
  background-color: #fff;
  /* @media screen and (max-width: 1630px) {
    max-width: 330px;
  } */
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

const SelectKartRecord = styled.div`
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
  width: 278px;
  height: 155px;
  padding: 10px 0px;
  display: flex;
`;

const KartImg = styled.div`
  width: 112px;
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  img {
    height: 70px;
  }
  /* @media screen and (max-width: 1630px) {
    max-width: 378px;
  } */
  border: 1px solid black;
`;

const KartImgNextMap = styled.ul`
  display: flex;
  flex-direction: column;
  width: 162.5px;
  height: 135px;
  & ul {
    flex: 1;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  @media screen and (max-width: 1630px) {
    max-width: 100%;
  }
`;

const MapList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
  padding-left: 10px;
  font-size: 11px;
  img {
    width: 23px;
    height: 23px;
  }

  .group {
    display: flex;
    align-items: center;
  }
  .track {
    margin-left: 5px;
  }
`;
