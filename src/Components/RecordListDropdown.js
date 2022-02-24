import React from 'react';
import styled from 'styled-components';

const RecordListDropdown = () => {
  return (
    <DropdownContainer>
      <ul>
        <li className="content-header">
          <div>
            <div className="rank">#</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">기록</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">
              <img src="" alt="누구의 카트"></img>
            </div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
        <li className="content">
          <div>
            <div className="rank">0</div>
            <div className="kart">카트</div>
            <div className="nickname">유저</div>
            <div className="record">1'47'84</div>
          </div>
        </li>
      </ul>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.section`
  width: 100%;
  height: 177px;
  margin-top: -5px;
  margin-bottom: 5px;
  border-width: 1px 1px 1px 1px;
  border-color: #f2f2f2;
  border-style: solid;
  font-size: 12px;

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    width: calc(100% / 9);
  }
  li > div {
    // width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 400;
    background-color: #fff;

    div {
      width: 100%;
    }
  }
  .rank {
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
  }
  .kart {
    height: 78px;
    line-height: 78px;
  }
  .nickname {
    height: 17px;
    line-height: 17px;
  }
  .record {
    height: 42px;
    line-height: 42px;
  }
`;

export default RecordListDropdown;
