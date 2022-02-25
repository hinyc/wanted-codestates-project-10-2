import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Ranking from './Pages/Ranking';
import GlobalStyles from './GlobalStyles';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
