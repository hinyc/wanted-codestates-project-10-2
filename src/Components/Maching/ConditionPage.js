import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ConditionBarPage from './ContionBarPage';

export default function ConditionPage({ user, battleUser }) {
  return (
    <Condition>
      <p className="title">컨디션</p>
      <ConditionBarPage user={user} />
      <ConditionBarPage battleUser={battleUser} />
      {/* <ConditionBar>
        {battleUser ? (
          <p>{battleUser.name}</p>
        ) : (
          <p className="notUser">메인 상대가 없습니다</p>
        )}
        <div className="bar">
          <div className="statusbar" ref={statusRef}>
            <div className="base battle" ref={baseRef}></div>
            <div className="drag">
              <div
                className="drag_handle"
                ref={dragHandleRef}
                onMouseDown={mouseDownHanlder}
                onMouseUp={stopMove}
                onMouseLeave={stopMove}
              ></div>
            </div>
          </div>
          <span>{battleWidth}%</span>
        </div> */}
      <div className="fight_btn">
        <button>Fight</button>
      </div>
    </Condition>
  );
}

const Condition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #3a4259;
  height: 200px;
  .title {
    margin: 20px 0 0 10px;
    color: white;
    font-size: 14px;
    text-align: left;
  }
  .fight_btn {
    display: flex;
    justify-content: center;
    width: 100%;
    button {
      width: 100px;
      height: 30px;
      margin-top: 10px;
      border-radius: 20px;
      border: none;
      background-color: #3975f9;
      color: #ffffff;
      text-align: center;
      box-shadow: 2px 2px 1px 1px #000000;
    }
    button:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
