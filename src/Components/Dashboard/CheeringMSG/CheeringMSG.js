import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CheeringMSG = ({ commentList, setCommentList }) => {
  // 인풋값 상태 관리
  const nickName = useRef(null);
  const comment = useRef(null);
  const commentScroll = useRef();

  // 로컬에 입풋값 저장
  const saveComment = () => {
    const commentArry = [
      // 로컬에 배열 추가 스프레드 문법
      ...commentList,
      {
        // JSON 형태로 저장했기 때문에 JavaScript로 변경
        yourName: nickName.current.value,
        yourComment: comment.current.value,
      },
    ];
    // 로컬에 저장
    window.localStorage.setItem('saveComment', JSON.stringify(commentArry));
  };
  // 저장 버튼
  const inputHandler = () => {
    saveComment();
    // 로컬에 저장된 값 - setCommentList에 저장해둔 값을 get으로 가져오기
    setCommentList(JSON.parse(window.localStorage.getItem('saveComment')));
    nickName.current.value = '';
    comment.current.value = '';
  };
  // 댓글 추가 시 스크롤 위치 하단 고정
  const scrollToBottom = () => {
    if (commentScroll.current) {
      commentScroll.current.scrollTop = commentScroll.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [commentList.length]);

  return (
    <>
      <MSGBox ref={commentScroll}>
        {commentList.map((el, idx) => (
          <MSG key={idx}>
            <Left>
              <NickName>{el.yourName}</NickName>
              <FontAwesomeIcon icon={faCircle} className="icon" />
            </Left>
            <Right>
              <Message>{el.yourComment}</Message>
            </Right>
          </MSG>
        ))}
      </MSGBox>
      <InputBox>
        <NickNameInput placeholder="닉네임" ref={nickName} />
        <MessageInput placeholder="최대 30자" ref={comment} />
        <MSGButton onClick={inputHandler}>남기기</MSGButton>
      </InputBox>
    </>
  );
};

const MSGBox = styled.div`
  height: 75%;
  overflow: scroll;
  position: relative;
  left: 0;
  overflow: scroll;
  padding: 10px 0;
`;

const MSG = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  animation: fadeInMSG 0.85s cubic-bezier(0.22, 0.61, 0.36, 1);
  :first-child {
    margin-top: 0px;
  }

  @keyframes fadeInMSG {
    from {
      opacity: 0;
      margin-left: 20px;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }
`;

const Left = styled(MSG)`
  width: auto;
  min-width: 51px;
  height: 100%;
  flex-grow: 0;
  justify-content: flex-start;

  .icon {
    font-size: 9px;
    color: #f62459;
    margin: 0 5px;
  }
`;

const NickName = styled.p`
  font-size: 12px;
  color: #0077ff;
  word-break: break-word;
`;

const Right = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Message = styled.div`
  width: 95%;
  height: auto;
  min-height: 42px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 7;
  padding: 10px;
  border: 1px solid #c3ced5;
  color: #333;
  background: #fff;
  border-radius: 15px;
  font-size: 12px;
  word-break: break-all;

  :before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
    left: -8.2px;
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
    left: -7.2px;
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
