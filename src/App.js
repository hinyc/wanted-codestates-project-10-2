import React, { useState } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Ranking from './Pages/Ranking';

import GlobalStyles from './GlobalStyles';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import { dummyMatchesInfo } from './Util/util';

function App() {
  const [selectPage, setSelectPage] = useState('main');
  const [nickname, setNickname] = useState(
    window.localStorage.getItem('nickname')
      ? window.localStorage.getItem('nickname')
      : 'BBEESSTT',
  );
  const [matchInfo, setMatchInfo] = useState(
    JSON.parse(window.localStorage.getItem('matchInfo'))
      ? JSON.parse(window.localStorage.getItem('matchInfo'))
      : dummyMatchesInfo,
  );

  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <NavigationBar
          nickname={nickname}
          setNickname={setNickname}
          matchInfo={matchInfo}
          setMatchInfo={setMatchInfo}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                nickname={nickname}
                matchInfo={matchInfo}
                setSelectPage={setSelectPage}
              />
            }
          />
          <Route
            path="/ranking"
            element={<Ranking setSelectPage={setSelectPage} />}
          />
        </Routes>
        <Footer selectPage={selectPage} />
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  /* min-height: 100%; */
`;

export default App;
