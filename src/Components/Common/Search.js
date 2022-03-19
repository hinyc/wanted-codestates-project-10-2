import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setUserInfo } from '../../modules/userInfo';
import { headers, PROXY } from '../../Util/util';

export default function Search({ setNickname, setMatchInfo }) {
  const nickname = useRef();
  const dispatch = useDispatch();
  const makeDate = (lastYear) => {
    const numTwoMaker = (num) => (num < 10 ? `${'0' + num}` : num);
    let newDate = new Date();
    const year = newDate.getFullYear();
    const month =
      newDate.getMonth() + 1 < 10
        ? `${'0' + (newDate.getMonth() + 1)}`
        : newDate.getMonth();
    const date = numTwoMaker(newDate.getDate());
    const hour = numTwoMaker(newDate.getHours());
    const minutes = numTwoMaker(newDate.getMinutes());
    const second = numTwoMaker(newDate.getSeconds());
    return `${
      lastYear ? year - 1 : year
    }-${month}-${date}T${hour}:${minutes}:${second} `;
  };

  const inputHandler = () => {
    axios
      .get(
        `${PROXY}/kart/v1.0/users/nickname/${encodeURI(
          nickname.current.value,
        )}`,
        headers,
      )
      .then((response) => response.data)
      .then((data) => {
        // data를 이용한 처리
        const access_id = data.accessId;
        //오늘기준 1년치
        const start_date = makeDate(1);
        const end_date = makeDate();
        const offset = 0;
        const limit = 200;
        const match_types =
          '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';
        //개인전으로 데이터 확보

        axios
          .get(
            `${PROXY}/kart/v1.0/users/${encodeURI(
              access_id,
            )}/matches?start_date=${encodeURI(start_date)}&end_date=${encodeURI(
              end_date,
            )} &offset=${encodeURI(offset)}&limit=${encodeURI(
              limit,
            )}&match_types=${encodeURI(match_types)}`,
            headers,
          )
          .then((response) => response.data)
          .then((data) => {
            // data를 이용한 처리

            setNickname(data.nickName);
            setMatchInfo(data.matches);
            window.localStorage.setItem('nickname', data.nickName);
            window.localStorage.setItem(
              'matchInfo',
              JSON.stringify(data.matches),
            );
            dispatch(setUserInfo(data.nickName, data.matches));
          })
          .catch((err) => console.error(err)); // 에러 처리
      })
      .catch((err) => console.error(err)); // 에러 처리
  };
  const searchEnter = (e) => {
    if (e.key === 'Enter') {
      inputHandler();
    }
  };
  return (
    <Container name="search">
      <Input ref={nickname} placeholder="닉네임 검색" onKeyDown={searchEnter} />
      <Button className="buttonBox" onClick={inputHandler}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 35px;

  .fa-solid.fa-magnifying-glass {
    position: absolute;
    color: #7fafe5;
    font-size: 15px;
    top: 9px;
    right: 25px;
  }

  :hover > .buttonBox > .fa-magnifying-glass {
    color: #fff;
    transition: 0.3s ease;
  }
`;

const Input = styled.input`
  width: 230px;
  height: 35px;
  margin-right: 15px;
  outline: 0;
  color: #fff;
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #7fafe5;
  padding: 0 25px 0 10px;
  transition: 0.3s ease;
  ::placeholder {
    color: #7fafe5;
    transition: 0.3s ease;
  }
  :hover {
    cursor: text;
    border-bottom: 1px solid #fff;
    ::placeholder {
      color: #fff;
    }
  }

  :focus {
    border-bottom: 1px solid #fff;
    ::placeholder {
      color: #fff;
    }
  }
`;

const Button = styled.button``;
