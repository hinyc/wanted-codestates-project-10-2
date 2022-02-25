import React, { useRef } from 'react';
import styled from 'styled-components';

export default function ConditionPage({ battleUser }) {
  let dragRef = useRef(null);
  let dragHandleRef = useRef(null);
  let positionX = useRef(null);
  let startPosition = useRef(null);

  const mouseDownHanlder = (e) => {
    e.preventDefault();
    console.log(e.target.getBoundingClientRect());
    startPosition.current = e.clientX;
    document.onmousemove = move;
  };

  const move = (e) => {
    console.log(startPosition.current, positionX.current, e.clientX);
    // console.log(positionX.current - e.clientX);
    if (dragRef.current.getBoundingClientRect().x > e.clientX) {
      document.onmousemove = null;
      return;
    }

    positionX.current =
      startPosition.current - e.target.getBoundingClientRect().x;

    dragHandleRef.current.style.transform = `translateX(calc(-${positionX.current}px))`;
  };

  const statusbarWidthChange = (e) => {
    console.log(dragRef.current.getBoundingClientRect());
    let width = dragRef.current.getBoundingClientRect().x - e.clientX;
    width = width / 100;
    console.log(width);
  };

  return (
    <Condition>
      <p className="title">컨디션</p>
      <ConditionBar>
        <p>배찌</p>
        <div className="bar">
          <div className="statusbar">
            <div
              className="base"
              ref={dragRef}
              onClick={statusbarWidthChange}
            ></div>
            <div className="drag">
              <div
                className="drag_handle"
                ref={dragHandleRef}
                onMouseDown={mouseDownHanlder}
                onMouseUp={() => (document.onmousemove = null)}
                onMouseLeave={() => (document.onmousemove = null)}
              ></div>
            </div>
          </div>
          <span>{positionX.current}%</span>
        </div>
      </ConditionBar>
      <ConditionBar>
        {battleUser ? (
          <p>{battleUser.name}</p>
        ) : (
          <p className="notUser">메인 상대가 없습니다</p>
        )}
        <div className="bar">
          <div className="statusbar">
            <div className="base battle"></div>
            <div className="drag">
              <div className="drag_handle"></div>
            </div>
          </div>
          <span>100%</span>
        </div>
      </ConditionBar>
      <div className="fight_btn">
        <button>Fight</button>
      </div>
    </Condition>
  );
}

const Condition = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  background-color: #3a4259;
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

const ConditionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #03d387;
  .notUser {
    color: #6d6c78;
  }
  p {
    flex: 1.5;
    padding-left: 10px;
    font-size: 14px;
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
      border-radius: 10px;
      background-color: #ffffff;
      box-shadow: 2px 2px 1px 1px #000000;
      .base {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #3975f9;
      }
      .drag {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-12.5%);
        .drag_handle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #ffffff;
          cursor: pointer;
        }
      }

      .base.battle {
        width: 100%;
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
