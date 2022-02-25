import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <>
      <ToggleContainer>
        <ToggleText>리타이어 노출</ToggleText>
        <ToggleBox onClick={toggleHandler}>
          <div className={`toggle_bg ${isToggleOn ? 'toggle_check' : ''}`} />
          <div className={`toggle_ball ${isToggleOn ? 'toggle_check' : ''}`} />
        </ToggleBox>
      </ToggleContainer>
    </>
  );
};

const ToggleContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 18px;
`;

const ToggleText = styled.div`
  width: 68px;
  position: absolute;
  right: 26px;
  bottom: -8px;
  color: #1f334a;
  font-size: 12px;
`;

const ToggleBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  > .toggle_bg {
    width: 34px;
    height: 18px;
    border-radius: 30px;
    background-position: right;
    background: linear-gradient(to left, #efefef 50%, #f62459 50%) right;
    background-size: 200%;
    transition: all 0.2s ease;

    &.toggle_check {
      background-position: left;
      background: linear-gradient(to right, #f62459 50%, #efefef 50%) left;
      background-size: 200%;
      transition: all 0.2s ease;
    }
  }

  > .toggle_ball {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 0.2s ease;

    &.toggle_check {
      left: 17px;
      transition: all 0.2s ease;
    }
  }
`;

export default Toggle;
