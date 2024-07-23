// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import TicTacToe from './pages/TicTacToe.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
