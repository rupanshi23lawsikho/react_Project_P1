import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddResourcePage from './pages/AddResourcePage';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-resource" element={<AddResourcePage />} />
    </Routes>
  </Router>
);

export default App;
