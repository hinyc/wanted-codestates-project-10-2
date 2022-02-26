import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FooterLogo } from '../Asset/footerLogo.svg';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterInner>
          <FooterTop>
            <FooterLogo id="LogoSvg" />
            <Line />
            <Text>Data based on NEXON DEVELOPERS</Text>
          </FooterTop>
          <FooterBottom>
            <Text className="BottomText">About TMI</Text>
            <Text className="BottomText">문의/피드백</Text>
            <Text className="BottomText">업데이트로그</Text>
            <Text className="BottomText">채용</Text>
          </FooterBottom>
        </FooterInner>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 30px;
  position: relative;
`;

const FooterInner = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const FooterTop = styled(FooterInner)`
  width: 100%;
  flex-direction: row;
  align-items: center;

  #LogoSvg {
    width: 140px;
    opacity: 0.3;
  }
`;
const Line = styled.div`
  width: 1px;
  height: 16.5px;
  background-color: #ccc;
  margin: 0 10px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #a1a1a1;
  padding-top: 3px;
  letter-spacing: -1px;
`;

const FooterBottom = styled(FooterInner)`
  width: 100%;
  flex-direction: row;
  align-items: center;

  .BottomText {
    margin-right: 20px;
    cursor: pointer;
  }
`;

export default Footer;
