/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Common/Search';

export default function NavigationBar({ setNickname, setMatchInfo }) {
  const navigate = useNavigate();
  const cartLogoUrl = 'https://tmi.nexon.com/img/assets/logo_kart.png';
  const tmiLogoUrl = 'https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg';

  const menus = [
    { name: '홈', link: '/' },
    { name: '랭킹', link: '/ranking' },
    { name: '카트', link: '' },
    { name: '트랙', link: '' },
  ];
  const linkHandler = (address) => {
    if (!address) return;
    navigate(address);
  };
  return (
    <Container>
      <Top>
        <div className="flex">
          <div className="flex">
            <img className="cart-logo" src={cartLogoUrl} />
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <div>
            <img className="tmi-logo" src={tmiLogoUrl} />
          </div>
        </div>
        <a href="https://kart.nexon.com/Main/Index.aspx" className="link">
          카트라이더 홈페이지 바로가기
        </a>
      </Top>
      <Nav>
        <Menus>
          {menus.map((el, i) => (
            <Menu
              key={i}
              onClick={() => {
                linkHandler(el.link);
              }}
            >
              {el.name}
            </Menu>
          ))}
        </Menus>
        <Search setNickname={setNickname} setMatchInfo={setMatchInfo} />
      </Nav>
      <FullWidth />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    display: flex;
    align-items: center;
  }
  .fa-solid.fa-caret-down {
    color: #ccc;
  }
`;

const Top = styled.div`
  width: 100%;
  width: 1000px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-logo {
    padding: 0 8px;
  }
  .tmi-logo {
    padding: 3px 0 0 13px;
  }
  .link {
    font-size: 12px;
    color: #6c7a89;
  }
`;
const Nav = styled.div`
  width: 100%;
  width: 1000px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #005fcc;
  /* position: relative; */
  .full-width {
    width: 100wm;
    height: 55px;
    background-color: #005fcc;
  }
`;

const FullWidth = styled.div`
  position: absolute;
  top: 48px;
  width: 100vw;
  height: 55px;
  background-color: #005fcc;
  z-index: -1;
`;

const Menus = styled.div`
  width: 480px;
  height: 55px;
  color: #7fafe5;
  display: flex;
  align-items: center;
`;
const Menu = styled.div`
  position: relative;
  text-align: center;
  width: 80px;
  height: 55px;
  line-height: 55px;
  margin-right: 40px;
  transition: 0.3s;
  :hover {
    color: #fff;
    cursor: pointer;
    ::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border-bottom: 4px solid #fff;
    }
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0%;
    border-bottom: 4px solid #fff;
    transition: 0.2s;
  }
`;
