import React from 'react';
import styled from 'styled-components';

export default function OverallRecord() {
  //00전 00승 00패
  const total = 200;
  const win = 51;
  const lose = 149;
  const winRatio = 26;
  const completeRatio = 86;
  const retireRatio = 14;

  return (
    <Container>
      <Title>
        <div>
          <span className=" blue">종합</span>
          <span>전적</span>
        </div>
        <span className="summary">{`${total}전 ${win}승 ${lose}패`}</span>
      </Title>
      <GrapeContainer>
        <div>
          <p className="title">승률</p>
          <div className="disk blueDisk">{`${winRatio}%`}</div>
        </div>
        <div className="center">
          <p className="title">완주율</p>
          <div className="disk greenDisk">{`${completeRatio}%`}</div>
        </div>
        <div>
          <p className="title">리타이어율</p>
          <div className="disk redDisk">{`${retireRatio}%`}</div>
        </div>
      </GrapeContainer>
      <Bottom>
        <div>
          <span className="blue">최다주행</span>
          <span>모드</span>
        </div>
        <span className="big">통합</span>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #f2f2f2;
  background-color: #fff;
  width: 326.66px;
  height: 266px;
`;

const Title = styled.div`
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
  font-weight: bold;
  height: 41px;
  margin: 0 12px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .blue {
    color: #0077ff;
    margin-right: 5px;
  }

  .summary {
    font-size: 0.7rem;
  }
`;

const GrapeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 159px;
  div {
    height: 143px;
    margin: 8px 0;
  }
  .title {
    font-size: 14px;
    text-align: center;
  }
  .disk {
    border: 5px solid black;
    border-radius: 50%;
    width: 83px;
    height: 83px;
    margin: 20px 9.57px;
    font-size: 20px;
    text-align: center;
    line-height: 75px;
  }
  .center {
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }

  .redDisk {
    color: #f62459;
    border-color: #f62459;
  }
  .greenDisk {
    color: #9bd728;
    border-color: #9bd728;
  }
  .blueDisk {
    color: #07f;
    border-color: #07f;
  }
`;

const Bottom = styled.div`
  height: 48px;
  margin: 8px;
  padding: 8px;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .blue {
    color: #0077ff;
    margin-right: 5px;
  }
  .big {
    font-size: 20px;
  }
`;
