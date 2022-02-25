import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function SearchPage({ userInfos, setBattleUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');
  let inputRef = useRef('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) {
      setMsg('라이더를 입력하세요.');
      setIsOpen(true);
    } else {
      setMsg('존재하지 않는 라이더입니다.');
    }

    // userInfos Api로 정보 받아야함
    const battle = userInfos.filter(
      (item) => item.name === inputRef.current.value,
    );
    if (battle[0]) {
      setBattleUser(battle[0]);
    } else {
      setIsOpen(true);
    }
  };

  const onClickHandler = (e) => {
    if (!e.target.closest('span')) {
      return;
    }
    inputRef.current.value = e.target.textContent;
  };

  return (
    <Search>
      <p>TMI</p>
      <form className="search" onSubmit={onSubmitHandler}>
        <input
          type="text"
          ref={inputRef}
          placeholder="매칭 상대의 라이더명을 입력하세요"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#373d50"
          onClick={onSubmitHandler}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </form>
      <User className="player_name" onClick={onClickHandler}>
        <li>
          <span>배찌</span>
        </li>
        <li>
          <span>크롱</span>
        </li>
        <li>
          <span>마리모</span>
        </li>
      </User>
      {isOpen && (
        <>
          <Modal>
            <p>알림</p>
            <div className="content">
              <p>{msg}</p>
              <button onClick={() => setIsOpen(false)}>확인</button>
            </div>
          </Modal>
          <ModalBackground />
        </>
      )}
    </Search>
  );
}

const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #4c4f62;
  p {
    height: 100%;
    flex: 1;
    background-color: #373d50;
    color: #4c4f62;
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 3;
    height: 100%;
    > input {
      flex-grow: 1;
      padding-left: 10px;
      border: none;
      background-color: #4c4f62;
      color: #ffffff;
      font-size: 14px;
      outline: none;
    }
    > svg {
      width: 25px;
      height: 25px;
      padding-right: 8px;
      transition: all 250ms ease-in;
      cursor: pointer;
    }
    > svg:hover {
      fill: #ffffff;
      transform: scale(1.1);
    }
  }
`;

const User = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  top: 100%;
  padding-left: 0;
  color: #6d6c78;
  list-style: none;
  li {
    flex: 0 0 auto;
    margin-left: 2px;
    padding: 2px;
    span {
      display: inline-block;
      height: 25px;
      line-height: 25px;
      padding: 0 3px;
      border: 1px solid #6d6c78;
      border-radius: 20px;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 550%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  z-index: 20;
  text-align: center;
  p {
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #3975f9;
    color: #ffffff;
    font-size: 14px;
  }
  .content {
    padding: 10px 0;
    background-color: #3a4259;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    p {
      margin: 0;
      background-color: #3a4259;
    }
    button {
      width: 50px;
      height: 32px;
      border: none;
      border-radius: 5px;
      background-color: #3975f9;
      color: #ffffff;
      font-size: 12px;
      cursor: pointer;
    }
    button:hover {
      background-color: #03d387;
    }
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
`;
