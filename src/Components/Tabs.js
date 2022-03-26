import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Common/Toggle';

const Tabs = ({ nickname, matchInfo, currentTab, setCurrentTab }) => {
  const menuArr = [
    {
      name: '통합',
      content: '',
    },
    { name: '매우빠름', content: '매우빠름' },
    { name: '무한부스터', content: '무한부스터' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
      <TabBox>
        <Toggle />
        <TabMenu>
          {/* {menuArr.map((el, index) => {
            return (
              <Menu
                key={index}
                className={`${
                  index === currentTab ? 'submenu focused' : 'submenu'
                }`}
                onClick={selectMenuHandler(index)}
              >
                {el.name}
              </Menu>
            );
          })} */}
          <Menu className="focused" onClick={() => setCurrentTab(0)}>
            통합
          </Menu>
          <Menu onClick={() => setCurrentTab(1)}>매우빠름</Menu>
          <Menu onClick={() => setCurrentTab(2)}>무한부스터</Menu>
        </TabMenu>
        <FullWidth />
        {/* <Desc>{menuArr[currentTab].content}</Desc> */}
      </TabBox>
    </>
  );
};

const TabBox = styled.div`
  width: 100%;
  width: 1000px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: relative;
  margin-bottom: 20px;

  .full-width {
    width: 100vw;
    height: 55px;
    background-color: #fff;
  }
`;

const FullWidth = styled.div`
  width: 100vw;
  height: auto;
  background-color: #ccc;
  position: absolute;
  top: 48px;
  z-index: -1;
`;

const TabMenu = styled.div`
  width: 100%;
  height: 55px;
  color: #ccc;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const Menu = styled.div`
  width: 81px;
  height: 55px;
  font-size: 14px;
  line-height: 55px;
  position: relative;
  text-align: center;
  margin-right: 10px;
  transition: 0.3s;

  .focused {
    color: #0077ff;
    border-bottom: 4px solid #0077ff;

    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border-bottom: 4px solid #0077ff;
    }
  }

  :hover {
    color: #0077ff;
    cursor: pointer;
    ::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border-bottom: 4px solid #0077ff;
    }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0%;
    border-bottom: 4px solid #0077ff;
    transition: 0.2s;
  }
`;

const Desc = styled.div`
  width: 100%;
  max-width: 650px;
  height: auto;
  position: absolute;
  top: 70px;
  right: 0;
  display: flex;
  // align-items: center;
  justify-content: center;

  margin-top: 45px;
`;

export default Tabs;
