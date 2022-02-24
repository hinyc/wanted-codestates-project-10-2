import styled from 'styled-components';

const RankingInfo = ({ setOnclick }) => {
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
            <span>랭킹 업데이트</span> 2022년 02월 01일 00:00:00 ~ 2022년 02월
            28일 24:00:00
          </Update>
        </Info>
        <GuideBtn onClick={setOnclick}>랭킹가이드</GuideBtn>
      </Wrapper>
    </PageDescription>
  );
};

const PageDescription = styled.div`
  width: 100%;
  background-color: #005fcc;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  min-width: 800px;
  align-items: center;
`;
const Info = styled.div`
  padding-right: 600px;
  margin-bottom: 20px;
  min-width: 500px;
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
  color: #fff;
`;
const Update = styled(Period)``;

const GuideBtn = styled.button`
  top: 110px;
  right: 10px;
  border: 1px solid #fff;
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
