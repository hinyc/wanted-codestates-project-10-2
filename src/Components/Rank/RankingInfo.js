import styled from 'styled-components';

const RankingInfo = ({ setOnclick, handleMouseEnter }) => {
  return (
    <PageDescription>
      <Wrapper>
        <Info>
          <PageName>2월 TMI 랭킹</PageName>
          <Line />
          <Period>
            <span>랭킹 산정기간</span> 2022년 02월 01일 00:00:00 ~ 2022년 02월
            28일 24:00:00
          </Period>
          <Update>
            <span>최근 업데이트</span> 2022년 02월 25일 09:15:32
          </Update>
        </Info>
        <GuideBtn onClick={setOnclick} onMouseEnter={handleMouseEnter}>
          랭킹가이드
        </GuideBtn>
      </Wrapper>
    </PageDescription>
  );
};

const PageDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #005fcc;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 1000px;
  background-color: #005fcc;
`;
const Info = styled.div`
  padding-right: 500px;
`;
const PageName = styled.p`
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  margin-bottom: 10px;
  color: #fff;
`;
const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;
const Period = styled.p`
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
  margin-bottom: 8px;
  width: 400px;
  color: #fff;
`;
const Update = styled(Period)``;

const GuideBtn = styled.button`
  width: 100px;
  top: 110px;
  right: 10px;
  border: 1px solid #fff;
  padding: 8px;
  color: #fff;
  background-color: #005fcc;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  &:hover {
    background-color: #ffffff;
    color: #005fcc;
  }
`;

export default RankingInfo;
