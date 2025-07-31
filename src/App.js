import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import FAQs from './pages/FAQs';
import Mentors from './pages/Mentors';

function App() {
  return (
    <Router>
      <div className="page-background">
        <Navbar />
       

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/mentors" element={<Mentors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}




export default App;
