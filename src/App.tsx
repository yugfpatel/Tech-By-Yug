import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CookiesPage from './pages/Cookies';
import { CookieProvider } from './contexts/CookieConsentContext';

function App() {
  return (
    <CookieProvider>
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<CookiesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CookieProvider>
  );
}

export default App;
