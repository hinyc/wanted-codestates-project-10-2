/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react';

import styled from 'styled-components';
import ReportModal from './Common/ReportModal';
import ShareModal from './Common/ShareModal';
import TeamsSelector from './Common/TeamsSelector';
import { useSelector } from 'react-redux';

export default function UserinfoBox() {
  const [showReport, setShowReport] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const nickName = useSelector((state) => state.userInfo.nickName);
  const matches = useSelector((state) => state.userInfo.matches);

  const character = matches[0].matches[0].player.character;

  const ModalOpenHandler = () => {
    document.body.style.overflow = 'hidden';
    setShowReport(true);
  };

  const userImg = `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${character}.png`;
  const userClass = 'https://tmi.nexon.com/img/icon_l3.png';

  const pageView = 734;

  return (
    <>
      <Container>
        <div className="subContainer">
          <div className="left">
            <img src={userImg} />
          </div>
          <div className="center">
            <h1>
              {`${nickName} `}
              <img src={userClass} />
            </h1>

            <div className="flex">
              <div className="vs">
                <TeamsSelector />
              </div>
              <Buttons>
                <Button>
                  <i className="fa-solid fa-arrow-rotate-right"></i> 전적갱신
                </Button>

                <Button onClick={ModalOpenHandler}>
                  <i className="fa-solid fa-bell"></i> 신고하기
                </Button>
                <Button onClick={() => setShowShareModal(true)}>
                  <i className="fa-solid fa-share-nodes"></i> 공유하기
                </Button>
                {showShareModal && (
                  <ShareModal setShowShareModal={setShowShareModal} />
                )}
              </Buttons>
            </div>
          </div>
          <div className="right">
            <PageView>
              <p className="text">
                <i className="fa-solid fa-eye"></i> 페이지뷰
              </p>
              <p className="number">{pageView}</p>
            </PageView>
          </div>
        </div>
      </Container>

      {showReport && <ReportModal setShowReport={setShowReport} />}
    </>
  );
}

const Container = styled.div`
  color: #1f334a;
  width: 1000px;
  height: 177px;
  border: 1px solid #f2f2f2;
  border-left: 4px solid #07f;
  position: relative;
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url('https://tmi.nexon.com/img/background_flag_w.png');
  background-size: cover;
  background-position: 50%;
  .subContainer {
    width: 995px;
    height: 146px;
    padding-top: 26px;
    display: flex;

    .left {
      img {
        width: 164px;
      }
    }
    .center {
      h1 {
        font-size: 45px;
        font-weight: 700;
        height: 65px;
        line-height: 75px;

        img {
          width: 25px;
        }
      }
      .flex {
        display: flex;
      }
    }

    .right {
    }
  }
`;

const Buttons = styled.div`
  position: relative;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 82px;
  height: 25px;
  vertical-align: center;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
  margin: 20px 10px 0 0;
`;

const PageView = styled.div`
  position: absolute;
  top: 88px;
  right: 40px;
  margin-top: -23.5px;
  color: #6c7a89;
  font-weight: 400;
  text-align: center;
  .text {
    padding: 0 10px;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
  .number {
    font-size: 20px;
    height: 29px;
    line-height: 29px;
  }
`;
