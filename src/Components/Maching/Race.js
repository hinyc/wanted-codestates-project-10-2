import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import raceImg from '../../Asset/race.jpeg';

export default function Race({ user, battleUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [winner, setWinner] = useState('');

  const userRef = useRef('');
  const battleRef = useRef('');
  const timeOut = useRef(null);

  let goal = 600;
  let goal1 = goal / 4;
  let goal2 = goal / 2;
  let goal3 = (goal * 3) / 4;
  let gage = 0; // 단계
  let best = 0; //제일 빠른놈
  let j = 0;

  const speed = new Array(4);
  speed[0] = new Array(4);
  speed[1] = new Array(4);
  speed[2] = new Array(4);
  speed[3] = new Array(4);

  const rally = new Array(4);
  rally[0] = 0;
  rally[1] = 0;

  const race = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        speed[i][j] = Math.random() * (j + 1) + 1;
      }
    }
    run();
  };

  const run = () => {
    setIsOpen(false);
    if (gage < goal) {
      if (gage > goal1) j = 1;
      if (gage > goal2) j = 2;
      if (gage > goal3) j = 3;

      for (let i = 0; i < 2; i++) {
        rally[i] += speed[i][j];
        if (best < rally[i]) {
          best = rally[i];
          if (i === 0) {
            setWinner(user);
          } else {
            setWinner(battleUser);
          }
        }
        if (i === 0) {
          userRef.current.style.transform = `translateX(${rally[i]}px)`;
        } else {
          battleRef.current.style.transform = `translateX(${rally[i]}px)`;
        }
      }
      gage = best;
      timeOut.current = setTimeout(() => {
        run();
      }, 10);
    } else {
      clearTimeout(timeOut.current);
      setIsOpen(true);
    }
  };

  const onClickRest = () => {
    userRef.current.style.transform = `translateX(0px)`;
    battleRef.current.style.transform = `translateX(0px)`;
    setIsOpen(false);
  };

  return (
    <RaceBattle>
      <Cart ref={userRef}>
        <p>{user.name}</p>
        <img src={user.cartImg} alt="cart" />
      </Cart>
      <Cart ref={battleRef}>
        <p>{battleUser.name}</p>
        <img src={battleUser.cartImg} alt="cart" />
      </Cart>
      <BattleButton onClick={race}>시작</BattleButton>
      {isOpen && (
        <>
          <Modal>
            <h3>알림</h3>
            <div className="content">
              <p>{winner.name} 승리!</p>
              <button onClick={onClickRest}>확인</button>
            </div>
          </Modal>
        </>
      )}
    </RaceBattle>
  );
}

const RaceBattle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 200px;
  background-color: salmon;
  z-index: 9;
  transform: translate(-50%, -50%);
  background: url(${raceImg}) center/contain;
`;

const Cart = styled.div`
  p {
    width: 35px;
    height: 15px;
    line-height: 15px;
    border-radius: 12px;
    background-color: #9bd628;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

const BattleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 50px;
  height: 32px;
  border: none;
  border-radius: 5px;
  background-color: #3975f9;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  ::before {
    position: absolute;
    top: 0;
    right: 10%;
    content: '';
    width: 10px;
    height: 100%;
    background-color: #f62459;
    z-index: -1;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  z-index: 9;
  text-align: center;
  padding: 10px;
  h3,
  p {
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #3975f9;
    color: #ffffff;
    letter-spacing: 8px;
    font-size: 14px;
  }
  p {
    animation: letter 2s ease-in infinite;
  }

  @keyframes letter {
    0% {
      color: #3975f9;
      font-size: 14px;
    }
    100% {
      color: #ffffff;
      font-size: 20px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
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
