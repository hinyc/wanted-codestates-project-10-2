import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Ranking from './Pages/Ranking';
import Maching from './Components/Maching/Match';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Main />} />
    //     <Route path="/ranking" element={<Ranking />} /> */}
    //     <Route path="/maching" element={<Maching />} />
    //   </Routes>
    // </Router>
    <div className="App">
      <Maching />
    </div>
  );
}

export default App;
