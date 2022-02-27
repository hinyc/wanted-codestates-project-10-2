import React, { useState } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Ranking from './Pages/Ranking';

import GlobalStyles from './GlobalStyles';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

function App() {
  const [seletPage, setSeletPage] = useState('main');
  const [nickname, setNickname] = useState(
    window.localStorage.getItem('nickname')
      ? window.localStorage.getItem('nickname')
      : 'BBEESSTT',
  );
  const [matchInfo, setMatchInfo] = useState(
    JSON.parse(window.localStorage.getItem('matchInfo'))
      ? JSON.parse(window.localStorage.getItem('matchInfo'))
      : undefined,
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
                setSeletPage={setSeletPage}
              />
            }
          />
          <Route
            path="/ranking"
            element={<Ranking setSeletPage={setSeletPage} />}
          />
        </Routes>
      </Wrapper>
      <Footer seletPage={seletPage} />
    </Router>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default App;
