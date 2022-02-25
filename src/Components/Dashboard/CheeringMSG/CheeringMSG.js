import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CheeringMSG = () => {
  return (
    <>
      <MSGBox>
        <MSG>
          <Left>
            <NickName>압구정꿀주먹</NickName>
            <FontAwesomeIcon icon={faCircle} className="icon" />
          </Left>
          <Right>
            <Message></Message>
          </Right>
        </MSG>
      </MSGBox>
      <InputBox>
        <NickNameInput placeholder="닉네임" />
        <MessageInput placeholder="최대 30자" />
        <MSGButton>남기기</MSGButton>
      </InputBox>
    </>
  );
};

const MSGBox = styled.div`
  height: 75%;
  overflow: scroll;
  position: relative;
  left: 0;
  animation: fadeInMSG 1.8s cubic-bezier(0.22, 0.61, 0.36, 1);

  @keyframes fadeInMSG {
    from {
      opacity: 0;
      left: 60px;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }
`;

const MSG = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Left = styled(MSG)`
  width: 30%;
  height: 100%;
  justify-content: center;

  .icon {
    font-size: 9px;
    color: #f62459;
    margin: 0 5px;
  }
`;

const NickName = styled.p`
  font-size: 12px;
  color: #0077ff;
`;

const Right = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Message = styled.div`
  width: 95%;
  height: 70%;
  display: inline-block;
  position: relative;
  padding: 10px;
  border: 1px solid #c3ced5;
  color: #333;
  background: #fff;
  border-radius: 15px;
  font-size: 12px;

  :before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
    left: -9px;
    border-style: solid;
    border-width: 9px 9px 9px 0;
    border-color: transparent #c3ced5;
    display: block;
    width: 0;
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
    left: -8px;
    border: 1px solid #c3ced5;
    border-width: 8px 8px 8px 0;
    border-color: transparent #fff;
    display: block;
    width: 0;
  }
`;

const InputBox = styled.div`
  height: 20%;
  border-top: 1px solid #efefef;
  padding-top: 10px;
`;

const NickNameInput = styled.input`
  width: 19%;
  height: 100%;
  font-size: 12px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
`;

const MessageInput = styled(NickNameInput)`
  width: 61%;
  margin: 0 1%;
`;

const MSGButton = styled.button`
  width: 18%;
  height: 100%;
  border-radius: 4px;
  background-color: #ccc;
  font-size: 13px;
  color: #fff;
`;

export default CheeringMSG;
