import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ComparePage({ user, battleUser }) {
  const machingFail = (
    <div className="right user_not">
      <div className="char">
        <img
          className="charImg"
          src="https://tmi.nexon.com/Img/assets/null_target.png"
          alt="img"
        />
      </div>
      <p className="msg">매칭 상대가 없습니다</p>
    </div>
  );

  const machingSucess = (
    <div className="right user_not">
      <p className="nick_name">{battleUser.name}</p>
      <div className="char">
        <img className="charImg" src={battleUser.charImg} alt="img" />
      </div>
      <div className="cart">
        <img className="cartImg" src={battleUser.cartImg} alt="img" />
        <p className="cart_name">택시</p>
      </div>
    </div>
  );

  return (
    <CompareUser>
      <div className="left">
        <p className="nick_name">{user.name}</p>
        <div className="char">
          <img className="charImg" src={user.charImg} alt="img" />
        </div>
        <div className="cart">
          <img className="cartImg" src={user.cartImg} alt="" />
          <p className="cart_name">택시</p>
        </div>
      </div>

      <div className="center">
        <img
          className="center_img"
          src="https://tmi.nexon.com/Img/assets/versus.png"
          alt=""
        />
      </div>
      {battleUser ? machingSucess : machingFail}
    </CompareUser>
  );
}

const CompareUser = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  width: 100%;
  img {
    object-fit: contain;
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
    flex: 3;
    .nick_name {
      margin: 2px;
      color: #ffffff;
    }
    .cart {
      position: relative;
      padding: 2px 25px;
      border-radius: 12px;
      border: 1px solid #6d6c78;
      text-align: center;
      .cart_name {
        margin: 2px;
        color: #ffffff;
      }
      ::before {
        content: '';
        position: absolute;
        top: 28px;
        right: 5px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid rgba(255, 255, 255, 0.5);
      }
    }
    .cart:hover {
      background-color: #6d6c78;
    }
  }

  .right {
    .char {
      .charImg {
        transform: rotateY(180deg);
      }
    }
  }

  .user_not {
    justify-content: center;
    .msg {
      margin: 0;
      color: #6d6c78;
      font-size: 12px;
      font-weight: 900;
    }
  }

  .center {
    display: flex;
    align-items: center;
    .center_img {
      width: 40px;
      height: 40px;
    }
  }

  .charImg {
    width: 85px;
    height: 70px;
  }

  .cartImg {
    width: 40px;
    height: 30px;
  }
`;
