import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Gen/Navbar';
import Login from './components/auth/login';
// import PageComponent from './components/Page';

function MYROuter() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default MYROuter;
