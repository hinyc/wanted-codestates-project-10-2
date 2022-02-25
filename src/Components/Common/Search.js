import React, { useRef } from 'react';
import styled from 'styled-components';

export default function Search() {
  const inputValue = useRef(null);
  console.log(inputValue);
  return (
    <Container name="search">
      <Input ref={inputValue} placeholder="닉네임 검색" />
      <Button className="buttonBox">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 35px;

  .fa-solid.fa-magnifying-glass {
    position: absolute;
    color: #7fafe5;
    font-size: 15px;
    top: 9px;
    right: 25px;
  }

  :hover > .buttonBox > .fa-magnifying-glass {
    color: #fff;
    transition: 0.3s ease;
  }
`;

const Input = styled.input`
  width: 230px;
  height: 35px;
  margin-right: 15px;
  outline: 0;
  color: #fff;
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #7fafe5;
  padding: 0 25px 0 10px;
  transition: 0.3s ease;
  ::placeholder {
    color: #7fafe5;
    transition: 0.3s ease;
  }
  :hover {
    cursor: text;
    border-bottom: 1px solid #fff;
    ::placeholder {
      color: #fff;
    }
  }

  :focus {
    border-bottom: 1px solid #fff;
    ::placeholder {
      color: #fff;
    }
  }
`;

const Button = styled.button``;
