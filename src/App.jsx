// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import TicTacToe from './pages/TicTacToe.jsx'
import RockPaperScissors from './pages/RockPaperScissors.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
