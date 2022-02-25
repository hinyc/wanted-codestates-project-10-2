import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Ranking from './Pages/Ranking';

import GlobalStyles from './GlobalStyles';
import NavigationBar from './Components/NavigationBar';

function App() {
  const [nickname, setNickname] = useState(
    window.localStorage.getItem('nickname')
      ? window.localStorage.getItem('nickname')
      : 'BBEESSTT',
  );
  const [matchInfo, setMatchInfo] = useState(
    JSON.parse(window.localStorage.getItem('matchInfo')),
  );

  return (
    <Router>
      <GlobalStyles />
      <NavigationBar
        nickname={nickname}
        setNickname={setNickname}
        matchInfo={matchInfo}
        setMatchInfo={setMatchInfo}
      />
      <Routes>
        <Route
          path="/"
          element={<Main nickname={nickname} matchInfo={matchInfo} />}
        />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
