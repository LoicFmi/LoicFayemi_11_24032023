import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import NotFound from './Error';
import Header from './Header';
import Footer from './Footer';

function Routeur() {
  return ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default Routeur;
