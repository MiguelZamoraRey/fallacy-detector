import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/Quicksand-VariableFont_wght.ttf';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import Analyzer from './pages/Analyzer/Analyzer';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Analyzer />} />
          <Route path="/home" element={<Analyzer />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
