import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

const Matching = () => {
  return (
    <>
      <MatchingBox>
        <LeftBox>
          <Text>
            1대1 매칭 시뮬레이터 - 'bbeesstt' 와 가상 대결을 펼쳐보세요.
          </Text>
        </LeftBox>
        <RightBox>
          <MatchingButton>
            <FontAwesomeIcon icon={faCalculator} className="icon" />
            매칭하기
          </MatchingButton>
        </RightBox>
      </MatchingBox>
    </>
  );
};

const MatchingBox = styled.div`
  width: 1000px;
  height: 45px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 1800% 1800%;

  -webkit-animation: rainbow 20s ease infinite;
  -z-animation: rainbow 20s ease infinite;
  -o-animation: rainbow 20s ease infinite;
  animation: rainbow 20s ease infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-o-keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const LeftBox = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #fff;
  font-weight: bold;
`;

const RightBox = styled(LeftBox)`
  width: 20%;
  justify-content: flex-end;
  padding-right: 20px;
`;

const MatchingButton = styled.button`
  width: 82px;
  height: 25px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  .icon {
    font-size: 0.7rem;
    margin-right: 5px;
  }
`;

export default Matching;
