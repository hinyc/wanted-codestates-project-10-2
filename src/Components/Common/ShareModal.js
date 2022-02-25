/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

export default function ShareModal({ setShowShareModal }) {
  return (
    <Container>
      <div className="subTitle">
        공유하기{' '}
        <i
          className="fa-solid fa-xmark"
          onClick={() => setShowShareModal(false)}
        ></i>
      </div>

      <div className="actions">
        <button>
          <img src="https://tmi.nexon.com/img/assets/icon_fb.svg" />
          <div className="text">페이스북</div>
        </button>
        <button>
          <img src="https://tmi.nexon.com/img/assets/icon_url.svg" />
          <div className="text">URL복사</div>
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 172px;
  top: 60px;
  left: 190px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  color: #1f334a;

  .subTitle {
    padding: 10px 28px 10px 28px;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #e7e7e7;
    height: 41px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .actions {
    padding: 20px 28px 20px 28px;
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 50px;
    font-size: 12px;
    font-weight: 400;
    border: none;
    img {
      width: 42px;
      height: 42px;
    }
    .text {
      text-align: center;
      width: 42px;
      height: 17.5px;
      margin-top: 10px;
      font-size: 11px;
    }
  }
`;
