import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import PageComponent from './components/Page';

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Navbar />} />
          {/* <Route path="/page" element={<PageComponent />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
