import React from 'react';
import styled from 'styled-components';
import CheeringMSG from './CheeringMSG';

const CheeringMSGBox = () => {
  return (
    <>
      <Container>
        <Title>
          <div>
            <span className="blue">응원</span>
            <span>한마디</span>
          </div>
          <RightBox>
            <div>
              <span className="twoTitle">오늘</span>
              <span className="twoTitle"> 5개</span>
            </div>
            <div>
              <span className="twoTitle">전체</span>
              <span className="twoTitle"> 6개</span>
            </div>
          </RightBox>
        </Title>
        <GrapeContainer>
          <CheeringMSG />
        </GrapeContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 1px solid #f2f2f2;
  background-color: #fff;
  width: 326.66px;
  height: 266px;
`;

const Title = styled.div`
  height: 20%;
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
  font-weight: bold;
  height: 41px;
  margin: 0 12px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .twoTitle {
    font-size: 0.7rem;
  }

  .blue {
    color: #0077ff;
    margin-right: 5px;
    font-size: 0.7rem;
    :first-child {
      font-size: 0.9rem;
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div:first-child {
    margin-right: 5px;
  }
`;

const GrapeContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 17px 0 17px;
`;

export default CheeringMSGBox;
