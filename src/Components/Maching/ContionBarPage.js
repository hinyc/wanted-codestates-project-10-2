import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function ConditionBarPage({ user, battleUser }) {
  const [baseWidth, setBaseWidth] = useState(100);
  let statusRef = useRef(null);
  let baseRef = useRef(null);
  let dragHandleRef = useRef(null);
  let positionX = useRef(null);
  let startPosition = useRef(null);
  let endPostionX = useRef(0);
  let bWidth;

  const mouseDownHanlder = (e) => {
    e.preventDefault();
    startPosition.current = e.clientX;
    document.onmousemove = move;
    document.onmouseup = stopMove;
  };

  const move = (e) => {
    if (baseRef.current.getBoundingClientRect().x > e.clientX) {
      return;
    }
    positionX.current = startPosition.current - e.clientX + endPostionX.current;
    bWidth =
      100 -
      (positionX.current / statusRef.current.getBoundingClientRect().width) *
        100;
    bWidth = bWidth > 100 ? 100 : bWidth < 0 ? 0 : bWidth;
    setBaseWidth(bWidth.toFixed());
    dragHandleRef.current.style.transform = `translateX(calc(-${positionX.current}px))`;
  };

  const stopMove = () => {
    endPostionX.current = positionX.current;
    document.onmousemove = null;
    return;
  };

  const userConditionBar = (
    <>
      <p>{user && user.name}</p>
      <div className="bar">
        <div className="statusbar" ref={statusRef}>
          <div className="base" ref={baseRef}></div>
          <div className="drag">
            <div
              className="drag_handle"
              ref={dragHandleRef}
              onMouseDown={mouseDownHanlder}
            ></div>
          </div>
        </div>
        <span>{baseWidth}%</span>
      </div>
    </>
  );

  const battleConditionBar = (
    <>
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
            ></div>
          </div>
        </div>
        <span>{baseWidth}%</span>
      </div>
    </>
  );

  const condtionRander = user ? userConditionBar : battleConditionBar;

  return <ConditionBar baseWidth={baseWidth}>{condtionRander}</ConditionBar>;
}

const ConditionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: #03d387;
  .notUser {
    color: #6d6c78;
  }
  p {
    flex: 1.5;
    padding-left: 10px;
    font-size: 16px;
    text-align: left;
  }

  .bar {
    flex: 2.5;
    display: flex;
    align-items: center;
    .statusbar {
      position: relative;
      width: 80%;
      height: 20px;
      margin-right: 20px;
      border-radius: 10px;
      background-color: #ffffff;
      box-shadow: 2px 2px 1px 1px #000000;

      .base {
        width: ${({ baseWidth }) => baseWidth}%;
        height: 100%;
        border-radius: 10px;
        background-color: #3975f9;
      }
      .drag {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(50%, -50%);
        .drag_handle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #ffffff;
          cursor: pointer;
        }
      }

      .base.battle {
        background-color: #f62459;
        & ~ .drag {
          left: calc(100% - 30px);
        }
      }
    }
    span {
      margin-left: 8px;
      color: #ffffff;
      font-size: 14px;
    }
  }
`;
